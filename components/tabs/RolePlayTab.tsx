'use client'
import { useState, useRef } from 'react'
import type { User } from '@supabase/supabase-js'
import { SCENARIOS } from '@/lib/data'

interface Message { role: 'user' | 'assistant'; content: string }
interface ChatMessage { from: 'migo' | 'you'; es: string; en?: string }

function speak(text: string, onDone?: () => void) {
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'es-MX'
  u.rate = 0.88
  if (onDone) u.onend = onDone
  window.speechSynthesis.speak(u)
}

export default function RolePlayTab({ user }: { user: User }) {
  const [scenarioKey, setScenarioKey] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [history, setHistory] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [micActive, setMicActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  function startScenario(key: string) {
    setScenarioKey(key)
    const opener = SCENARIOS[key].opener
    setMessages([{ from: 'migo', es: opener.es, en: opener.en }])
    setHistory([{ role: 'assistant', content: opener.es }])
    speak(opener.es)
  }

  async function sendMessage(text: string) {
    if (!text.trim() || !scenarioKey || loading) return
    setInput('')
    setLoading(true)

    const userMsg: ChatMessage = { from: 'you', es: text.trim() }
    setMessages(m => [...m, userMsg])

    const newHistory: Message[] = [...history, { role: 'user', content: text.trim() }]
    setHistory(newHistory)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newHistory,
          scenario: SCENARIOS[scenarioKey].title + ' — ' + SCENARIOS[scenarioKey].opener.en
        })
      })
      const data = await res.json()
      const migoMsg: ChatMessage = { from: 'migo', es: data.es, en: data.en }
      setMessages(m => [...m, migoMsg])
      setHistory(h => [...h, { role: 'assistant', content: data.es }])
      speak(data.es)
    } catch {
      setMessages(m => [...m, { from: 'migo', es: 'Lo siento, hubo un error.', en: 'Sorry, there was an error.' }])
    }
    setLoading(false)
  }

  async function toggleMic() {
    if (micActive) {
      mediaRecorderRef.current?.stop()
      setMicActive(false)
      return
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      chunksRef.current = []
      mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
      mr.onstop = async () => {
        stream.getTracks().forEach(t => t.stop())
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const formData = new FormData()
        formData.append('file', blob, 'audio.webm')
        formData.append('model', 'whisper-1')
        formData.append('language', 'es')

        try {
          const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}` },
            body: formData
          })
          const data = await res.json()
          if (data.text) sendMessage(data.text)
        } catch {
          alert('Transcription failed. Try typing instead.')
        }
      }
      mr.start()
      mediaRecorderRef.current = mr
      setMicActive(true)
    } catch {
      alert('Microphone access denied.')
    }
  }

  if (!scenarioKey) {
    return (
      <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
        <h2 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:6 }}>Choose a Scenario</h2>
        <p style={{ color:'var(--fg2)', fontSize:'0.85rem', marginBottom:20 }}>
          Migo plays the other person and responds intelligently in Spanish.
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
      <div style={{
        padding:'12px 20px', borderBottom:'1px solid var(--border)',
        display:'flex', alignItems:'center', gap:10, flexShrink:0
      }}>
        <button onClick={() => setScenarioKey(null)} style={{
          background:'none', border:'none', color:'var(--fg2)', cursor:'pointer', fontSize:'0.9rem'
        }}>← Back</button>
        <span style={{ fontWeight:700 }}>{SCENARIOS[scenarioKey].title}</span>
      </div>

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
          </div>
        ))}
        {loading && (
          <div style={{ display:'flex', alignItems:'flex-start' }}>
            <div style={{ background:'var(--bg2)', borderRadius:'4px 16px 16px 16px', padding:'12px 14px', color:'var(--fg2)' }}>
              Migo está pensando…
            </div>
          </div>
        )}
      </div>

      <div style={{
        padding:'12px 16px', borderTop:'1px solid var(--border)',
        background:'var(--bg2)', flexShrink:0,
        paddingBottom:'calc(12px + env(safe-area-inset-bottom, 0px))'
      }}>
        <div style={{ display:'flex', gap:8 }}>
          <button onClick={toggleMic} style={{
            width:48, height:48, borderRadius:12, border:'none', flexShrink:0, cursor:'pointer',
            background: micActive ? '#22c55e' : 'var(--bg3)',
            fontSize:'1.2rem', display:'flex', alignItems:'center', justifyContent:'center',
            transition: 'background 0.2s'
          }}>
            {micActive ? '✅' : '🎤'}
          </button>
          <input
            value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="Respond in Spanish…"
            style={{
              flex:1, background:'var(--bg3)', border:'1px solid var(--border)',
              borderRadius:12, padding:'12px 14px', color:'var(--fg)', fontSize:'0.95rem', outline:'none'
            }}
          />
          <button onClick={() => sendMessage(input)} style={{
            width:48, height:48, borderRadius:12, border:'none', flexShrink:0,
            background:'var(--accent)', color:'#fff', fontSize:'1.2rem', cursor:'pointer'
          }}>→</button>
        </div>
        {micActive && (
          <p style={{ color:'#22c55e', fontSize:'0.8rem', textAlign:'center', marginTop:8 }}>
            🟢 Recording… tap ✅ when done speaking
          </p>
        )}
      </div>
    </div>
  )
}
