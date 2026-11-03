'use client'
import { useState, useRef } from 'react'
import type { User } from '@supabase/supabase-js'
import { SCENARIOS, ERROR_PATTERNS } from '@/lib/data'
import { createClient } from '@/lib/supabase'

function speak(text: string, lang: string, onDone?: () => void) {
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = 0.88
  if (onDone) u.onend = onDone
  window.speechSynthesis.speak(u)
}

export default function RolePlayTab({ user }: { user: User }) {
  const [scenarioKey, setScenarioKey] = useState<string | null>(null)
  const [messages, setMessages] = useState<{ from: 'migo' | 'you'; es: string; en?: string }[]>([])
  const [replyIdx, setReplyIdx] = useState(0)
  const [input, setInput] = useState('')
  const [micActive, setMicActive] = useState(false)
  const [correction, setCorrection] = useState<string | null>(null)
  const recognitionRef = useRef<any>(null)
  const supabase = createClient()

  function startScenario(key: string) {
    setScenarioKey(key)
    setReplyIdx(0)
    setCorrection(null)
    const opener = SCENARIOS[key].opener
    setMessages([{ from: 'migo', es: opener.es, en: opener.en }])
    speak(opener.es, 'es-MX')
  }

  function checkErrors(text: string): string | null {
    for (const ep of ERROR_PATTERNS) {
      if (ep.re.test(text)) return ep.say
    }
    return null
  }

  function sendMessage() {
    if (!input.trim() || !scenarioKey) return
    const userText = input.trim()
    setInput('')

    // Add user message
    setMessages(m => [...m, { from: 'you', es: userText }])

    // Check for errors
    const err = checkErrors(userText)
    if (err) {
      setCorrection(err)
      speak(err, 'es-MX', () => sendMigoReply())
    } else {
      setCorrection(null)
      sendMigoReply()
    }
  }

  function sendMigoReply() {
    const scenario = SCENARIOS[scenarioKey!]
    const replies = scenario.replies
    if (replyIdx >= replies.length) {
      const done = { from: 'migo' as const, es: '¡Muy bien! Eso fue excelente. 👏', en: 'Very good! That was excellent.' }
      setMessages(m => [...m, done])
      speak(done.es, 'es-MX')
      return
    }
    const reply = replies[replyIdx]
    setReplyIdx(i => i + 1)
    setMessages(m => [...m, { from: 'migo', es: reply.es, en: reply.en }])
    speak(reply.es, 'es-MX')
  }

  function toggleMic() {
    if (micActive) {
      recognitionRef.current?.stop()
      setMicActive(false)
      return
    }
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SR) {
      alert('Speech recognition not available. Use Chrome or type your response.')
      return
    }
    window.speechSynthesis.cancel()
    const rec = new SR()
    rec.lang = 'es-MX'
    rec.interimResults = false
    rec.maxAlternatives = 1
    rec.onresult = (e: any) => {
      setInput(e.results[0][0].transcript)
      setMicActive(false)
    }
    rec.onerror = () => setMicActive(false)
    rec.onend = () => setMicActive(false)
    rec.start()
    recognitionRef.current = rec
    setMicActive(true)
  }

  if (!scenarioKey) {
    return (
      <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
        <h2 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:6 }}>Choose a Scenario</h2>
        <p style={{ color:'var(--fg2)', fontSize:'0.85rem', marginBottom:20 }}>
          Migo plays the other person. Errors get corrected out loud in Spanish.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {Object.entries(SCENARIOS).map(([key, s]) => (
            <button key={key} onClick={() => startScenario(key)} style={{
              background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:12,
              padding:'16px', textAlign:'left', cursor:'pointer'
            }}>
              <div style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--fg)' }}>{s.title}</div>
              <div style={{ color:'var(--fg2)', fontSize:'0.8rem', marginTop:4 }}>{s.opener.en}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'calc(100vh - 120px)' }}>
      {/* Header */}
      <div style={{
        padding:'12px 20px', borderBottom:'1px solid var(--border)',
        display:'flex', alignItems:'center', gap:10, flexShrink:0
      }}>
        <button onClick={() => setScenarioKey(null)} style={{
          background:'none', border:'none', color:'var(--fg2)', cursor:'pointer', fontSize:'0.9rem'
        }}>← Back</button>
        <span style={{ fontWeight:700 }}>{SCENARIOS[scenarioKey].title}</span>
      </div>

      {/* Messages */}
      <div style={{ flex:1, overflow:'auto', padding:'16px 20px', display:'flex', flexDirection:'column', gap:12 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems: m.from === 'migo' ? 'flex-start' : 'flex-end' }}>
            <div style={{
              maxWidth:'80%', background: m.from === 'migo' ? 'var(--bg2)' : 'var(--accent)',
              borderRadius: m.from === 'migo' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
              padding:'12px 14px'
            }}>
              <div style={{ color:'var(--fg)', fontWeight:600 }}>{m.es}</div>
              {m.en && <div style={{ color: m.from === 'migo' ? 'var(--fg2)' : 'rgba(255,255,255,0.7)', fontSize:'0.82rem', marginTop:4 }}>{m.en}</div>}
            </div>
            {correction && i === messages.length - 1 && m.from === 'you' && (
              <div style={{
                maxWidth:'80%', background:'var(--red)', borderRadius:'16px 4px 16px 16px',
                padding:'10px 14px', marginTop:6, fontSize:'0.85rem'
              }}>
                ⚠️ {correction}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{
        padding:'12px 16px', borderTop:'1px solid var(--border)',
        background:'var(--bg2)', flexShrink:0,
        paddingBottom:'calc(12px + env(safe-area-inset-bottom, 0px))'
      }}>
        <div style={{ display:'flex', gap:8 }}>
          <button onClick={toggleMic} style={{
            width:48, height:48, borderRadius:12, border:'none', flexShrink:0, cursor:'pointer',
            background: micActive ? 'var(--red)' : 'var(--bg3)',
            fontSize:'1.2rem', display:'flex', alignItems:'center', justifyContent:'center'
          }}>
            {micActive ? '⏹' : '🎤'}
          </button>
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Respond in Spanish…"
            style={{
              flex:1, background:'var(--bg3)', border:'1px solid var(--border)',
              borderRadius:12, padding:'12px 14px', color:'var(--fg)', fontSize:'0.95rem', outline:'none'
            }}
          />
          <button onClick={sendMessage} style={{
            width:48, height:48, borderRadius:12, border:'none', flexShrink:0,
            background:'var(--accent)', color:'#fff', fontSize:'1.2rem', cursor:'pointer'
          }}>
            →
          </button>
        </div>
        {micActive && (
          <p style={{ color:'var(--red)', fontSize:'0.8rem', textAlign:'center', marginTop:8 }}>
            🔴 Listening… speak in Spanish
          </p>
        )}
      </div>
    </div>
  )
}
