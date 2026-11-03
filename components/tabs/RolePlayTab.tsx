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

// Pick the best supported audio format for this browser (Safari needs mp4)
function getSupportedMimeType(): string {
  const types = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg']
  for (const t of types) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(t)) return t
  }
  return ''
}

export default function RolePlayTab({ user }: { user: User }) {
  const [scenarioKey, setScenarioKey] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [history, setHistory] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [micActive, setMicActive] = useState(false)
  const [loading, setLoading] = useState(false)
  const [transcribing, setTranscribing] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const mimeTypeRef = useRef<string>('')

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

  async function startMic() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mimeType = getSupportedMimeType()
      mimeTypeRef.current = mimeType
      const mr = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream)
      chunksRef.current = []
      mr.ondataavailable = e => { if (e.data && e.data.size > 0) chunksRef.current.push(e.data) }
      mr.start()
      mediaRecorderRef.current = mr
      setMicActive(true)
    } catch {
      alert('Microphone access denied. Please allow mic access in your browser settings.')
    }
  }

  async function stopMicAndSend() {
    const mr = mediaRecorderRef.current
    if (!mr) return
    setMicActive(false)
    setTranscribing(true)

    await new Promise<void>(resolve => {
      mr.onstop = () => resolve()
      mr.stop()
      mr.stream.getTracks().forEach(t => t.stop())
    })

    const mime = mimeTypeRef.current || 'audio/webm'
    const ext = mime.includes('mp4') ? 'mp4' : mime.includes('ogg') ? 'ogg' : 'webm'
    const blob = new Blob(chunksRef.current, { type: mime })

    if (blob.size < 1000) {
      setTranscribing(false)
      alert('Recording was too short. Try again.')
      return
    }

    const formData = new FormData()
    formData.append('file', blob, `audio.${ext}`)
    formData.append('model', 'whisper-1')
    formData.append('language', 'es')

    try {
      // Route through our server so we don't need NEXT_PUBLIC_OPENAI_KEY in the browser
      formData.append('ext', ext)
      const res = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      setTranscribing(false)
      if (data.text && data.text.trim()) {
        sendMessage(data.text.trim())
      } else {
        alert('Could not understand audio. Try speaking more clearly or type your response.')
      }
    } catch {
      setTranscribing(false)
      alert('Transcription failed. Check your connection and try again.')
    }
  }

  function cancelMic() {
    const mr = mediaRecorderRef.current
    if (!mr) return
    mr.onstop = null
    mr.stop()
    mr.stream.getTracks().forEach(t => t.stop())
    chunksRef.current = []
    mediaRecorderRef.current = null
    setMicActive(false)
  }

  if (!scenarioKey) {
    return (
      <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
        <h2 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:6 }}>Choose a Scenario</h2>
        <p style={{ color:'var(--fg2)', fontSize:'0.85rem', marginBottom:20 }}>
          Migo plays the other person and responds in Spanish.
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
          </div>
        ))}
        {(loading || transcribing) && (
          <div style={{ display:'flex', alignItems:'flex-start' }}>
            <div style={{ background:'var(--bg2)', borderRadius:'4px 16px 16px 16px', padding:'12px 14px', color:'var(--fg2)' }}>
              {transcribing ? 'Transcribing…' : 'Migo está pensando…'}
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div style={{
        padding:'12px 16px', borderTop:'1px solid var(--border)',
        background:'var(--bg2)', flexShrink:0,
        paddingBottom:'calc(12px + env(safe-area-inset-bottom, 0px))'
      }}>
        {micActive ? (
          /* Recording mode: big red pulse + ✓ and ✕ buttons */
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{
                width:12, height:12, borderRadius:'50%', background:'#ef4444',
                boxShadow:'0 0 0 0 rgba(239,68,68,0.4)',
                animation:'pulse 1.2s infinite'
              }} />
              <span style={{ color:'#ef4444', fontWeight:600, fontSize:'0.95rem' }}>Recording…</span>
            </div>
            <div style={{ display:'flex', gap:16 }}>
              {/* Cancel */}
              <button onClick={cancelMic} style={{
                width:64, height:64, borderRadius:'50%', border:'2px solid #ef4444',
                background:'transparent', color:'#ef4444', fontSize:'1.6rem',
                cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'
              }}>✕</button>
              {/* Confirm / send */}
              <button onClick={stopMicAndSend} style={{
                width:64, height:64, borderRadius:'50%', border:'none',
                background:'#22c55e', color:'#fff', fontSize:'1.6rem',
                cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center'
              }}>✓</button>
            </div>
            <p style={{ color:'var(--fg2)', fontSize:'0.78rem', margin:0 }}>
              Tap ✓ when done • Tap ✕ to cancel
            </p>
            <style>{`@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(239,68,68,0.4)}70%{box-shadow:0 0 0 10px rgba(239,68,68,0)}100%{box-shadow:0 0 0 0 rgba(239,68,68,0)}}`}</style>
          </div>
        ) : (
          /* Normal mode: mic + text + send */
          <div style={{ display:'flex', gap:8 }}>
            <button onClick={startMic} disabled={loading || transcribing} style={{
              width:48, height:48, borderRadius:12, border:'none', flexShrink:0, cursor:'pointer',
              background:'var(--bg3)', fontSize:'1.4rem',
              display:'flex', alignItems:'center', justifyContent:'center',
              opacity: (loading || transcribing) ? 0.5 : 1
            }}>🎤</button>
            <input
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Respond in Spanish…"
              disabled={loading || transcribing}
              style={{
                flex:1, background:'var(--bg3)', border:'1px solid var(--border)',
                borderRadius:12, padding:'12px 14px', color:'var(--fg)', fontSize:'0.95rem', outline:'none'
              }}
            />
            <button onClick={() => sendMessage(input)} disabled={loading || transcribing} style={{
              width:48, height:48, borderRadius:12, border:'none', flexShrink:0,
              background:'var(--accent)', color:'#fff', fontSize:'1.2rem', cursor:'pointer',
              opacity: (loading || transcribing) ? 0.5 : 1
            }}>→</button>
          </div>
        )}
      </div>
    </div>
  )
}
