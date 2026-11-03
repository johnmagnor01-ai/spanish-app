'use client'
import { useState, useRef, useCallback } from 'react'
import type { User } from '@supabase/supabase-js'
import { DECKS } from '@/lib/data'
import { createClient } from '@/lib/supabase'

function speak(text: string, lang: string, onDone?: () => void) {
  if (typeof window === 'undefined') return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ''))
  u.lang = lang
  u.rate = 0.88
  if (onDone) u.onend = onDone
  window.speechSynthesis.speak(u)
}

function speakSeq(parts: { text: string; lang: string; pause?: number }[], onDone?: () => void) {
  let i = 0
  function next() {
    if (i >= parts.length) { onDone?.(); return }
    const p = parts[i++]
    speak(p.text, p.lang, () => setTimeout(next, p.pause ?? 600))
  }
  next()
}

export default function LessonTab({ user }: { user: User }) {
  const [deckKey, setDeckKey] = useState<string | null>(null)
  const [cardIdx, setCardIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [done, setDone] = useState(false)
  const supabase = createClient()
  const playRef = useRef(true)

  const deck = deckKey ? DECKS[deckKey] : null

  function startDeck(key: string) {
    setDeckKey(key)
    setCardIdx(0)
    setDone(false)
    setPlaying(false)
  }

  const playLesson = useCallback(() => {
    if (!deck) return
    setPlaying(true)
    playRef.current = true
    let idx = 0

    function playCard() {
if (!playRef.current || !deck || idx >= deck.items.length) {
        setPlaying(false)
if (deck && idx >= deck.items.length) setDone(true)
        return
      }
      setCardIdx(idx)
      const item = deck.items[idx]
      idx++
      speakSeq([
        { text: item.es, lang: 'es-MX', pause: 800 },
        { text: item.en, lang: 'en-US', pause: 700 },
        { text: item.tip.replace(/<[^>]+>/g, ''), lang: 'en-US', pause: 300 },
      ], () => setTimeout(playCard, 1200))
    }
    playCard()
  }, [deck])

  function stopLesson() {
    playRef.current = false
    window.speechSynthesis.cancel()
    setPlaying(false)
  }

  async function saveProgress() {
    const today = new Date().toISOString().slice(0, 10)
    await supabase.from('study_sessions').upsert({
      user_id: user.id,
      date: today,
      deck: deckKey,
      cards_done: deck?.items.length ?? 0,
    }, { onConflict: 'user_id,date,deck' })
  }

  if (!deckKey) {
    return (
      <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
        <h2 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:6 }}>Choose a Deck</h2>
        <p style={{ color:'var(--fg2)', fontSize:'0.85rem', marginBottom:20 }}>
          Tap a deck then hit Play — audio runs hands-free.
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {Object.entries(DECKS).map(([key, d]) => (
            <button key={key} onClick={() => startDeck(key)} style={{
              background:'var(--bg2)', border:`2px solid ${d.color}22`,
              borderRadius:12, padding:'16px', textAlign:'left', cursor:'pointer',
              display:'flex', alignItems:'center', gap:14
            }}>
              <div style={{ width:12, height:12, borderRadius:'50%', background:d.color, flexShrink:0 }} />
              <div>
                <div style={{ fontWeight:700, color:'var(--fg)', fontSize:'0.95rem' }}>{d.label}</div>
                <div style={{ color:'var(--fg2)', fontSize:'0.8rem' }}>{d.items.length} cards
                  {d.source && <span style={{color:'var(--fg2)'}}> · {d.source}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const item = deck!.items[cardIdx]

  return (
    <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
      <button onClick={() => { stopLesson(); setDeckKey(null) }} style={{
        background:'none', border:'none', color:'var(--fg2)', cursor:'pointer', marginBottom:16,
        display:'flex', alignItems:'center', gap:6, fontSize:'0.9rem'
      }}>
        ← Back
      </button>

      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
        <div style={{ width:10, height:10, borderRadius:'50%', background:deck!.color }} />
        <h2 style={{ fontWeight:700, fontSize:'1.1rem' }}>{deck!.label}</h2>
        <span style={{ marginLeft:'auto', color:'var(--fg2)', fontSize:'0.85rem' }}>
          {cardIdx + 1} / {deck!.items.length}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height:4, background:'var(--bg3)', borderRadius:2, marginBottom:24 }}>
        <div style={{
          height:'100%', borderRadius:2, background:deck!.color,
          width:`${((cardIdx + 1) / deck!.items.length) * 100}%`,
          transition:'width 0.4s'
        }} />
      </div>

      {done ? (
        <div style={{ textAlign:'center', padding:'40px 0' }}>
          <div style={{ fontSize:'3rem', marginBottom:12 }}>🎉</div>
          <h3 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:8 }}>Deck complete!</h3>
          <p style={{ color:'var(--fg2)', marginBottom:24 }}>Great work. Keep going or pick another deck.</p>
          <button onClick={() => { saveProgress(); setDeckKey(null) }} style={{
            background:'var(--accent)', color:'#fff', border:'none', borderRadius:10,
            padding:'14px 28px', fontSize:'1rem', fontWeight:700, cursor:'pointer'
          }}>Back to Decks</button>
        </div>
      ) : (
        <>
          {/* Card */}
          <div style={{
            background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:16,
            padding:'28px 24px', marginBottom:20, minHeight:180
          }}>
            <div style={{ fontSize:'1.4rem', fontWeight:700, color:'var(--fg)', marginBottom:10, lineHeight:1.3 }}>
              {item.es}
            </div>
            <div style={{ fontSize:'1rem', color:'var(--fg2)', marginBottom:16 }}>{item.en}</div>
            <div style={{
              background:'var(--bg3)', borderRadius:10, padding:'12px',
              fontSize:'0.85rem', color:'var(--fg2)', lineHeight:1.6
            }} dangerouslySetInnerHTML={{ __html: item.tip }} />
          </div>

          {/* Controls */}
          <div style={{ display:'flex', gap:10 }}>
            {!playing ? (
              <button onClick={playLesson} style={{
                flex:1, background:'var(--accent)', color:'#fff', border:'none',
                borderRadius:12, padding:'16px', fontSize:'1rem', fontWeight:700, cursor:'pointer'
              }}>
                ▶ Play All (Audio)
              </button>
            ) : (
              <button onClick={stopLesson} style={{
                flex:1, background:'var(--red)', color:'#fff', border:'none',
                borderRadius:12, padding:'16px', fontSize:'1rem', fontWeight:700, cursor:'pointer'
              }}>
                ⏹ Stop
              </button>
            )}
            {!playing && (
              <button onClick={() => setCardIdx(i => Math.min(i + 1, deck!.items.length - 1))} style={{
                background:'var(--bg2)', border:'1px solid var(--border)', color:'var(--fg)',
                borderRadius:12, padding:'16px 20px', fontSize:'1rem', cursor:'pointer'
              }}>
                →
              </button>
            )}
          </div>

          {!playing && (
            <button onClick={() => {
              speakSeq([
                { text: item.es, lang:'es-MX', pause:800 },
                { text: item.en, lang:'en-US', pause:700 },
                { text: item.tip.replace(/<[^>]+>/g,''), lang:'en-US' }
              ])
            }} style={{
              width:'100%', marginTop:10, background:'none',
              border:'1px solid var(--border)', borderRadius:12,
              padding:'12px', color:'var(--fg2)', fontSize:'0.9rem', cursor:'pointer'
            }}>
              🔊 Hear this card
            </button>
          )}
        </>
      )}
    </div>
  )
}
