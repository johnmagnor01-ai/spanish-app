'use client'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'

interface Session {
  date: string
  deck: string
  cards_done: number
}

export default function ProgressTab({ user }: { user: User }) {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    supabase
      .from('study_sessions')
      .select('*')
      .eq('user_id', user.id)
      .order('date', { ascending: false })
      .limit(30)
      .then(({ data }) => {
        setSessions(data ?? [])
        setLoading(false)
      })
  }, [])

  const totalCards = sessions.reduce((s, r) => s + (r.cards_done ?? 0), 0)
  const uniqueDays = Array.from(new Set(sessions.map(s => s.date))).length

  // Streak calc
  function calcStreak() {
    const dates = Array.from(new Set(sessions.map(s => s.date))).sort().reverse()
    if (!dates.length) return 0
    let streak = 0
    let cur = new Date()
    for (const d of dates) {
      const diff = Math.floor((cur.getTime() - new Date(d).getTime()) / 86400000)
      if (diff <= 1) { streak++; cur = new Date(d) }
      else break
    }
    return streak
  }

  const streak = calcStreak()

  return (
    <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
      <h2 style={{ fontSize:'1.2rem', fontWeight:700, marginBottom:20 }}>My Progress</h2>

      {/* Stats row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:24 }}>
        {[
          { label:'Day Streak', value: streak, icon:'🔥' },
          { label:'Study Days', value: uniqueDays, icon:'📅' },
          { label:'Cards Done', value: totalCards, icon:'🃏' },
        ].map(s => (
          <div key={s.label} style={{
            background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:12,
            padding:'14px 10px', textAlign:'center'
          }}>
            <div style={{ fontSize:'1.4rem' }}>{s.icon}</div>
            <div style={{ fontSize:'1.5rem', fontWeight:800, color:'var(--accent)' }}>{s.value}</div>
            <div style={{ fontSize:'0.72rem', color:'var(--fg2)', marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent sessions */}
      <h3 style={{ fontSize:'0.9rem', fontWeight:700, color:'var(--fg2)', marginBottom:12, textTransform:'uppercase', letterSpacing:'0.08em' }}>
        Recent Sessions
      </h3>

      {loading ? (
        <p style={{ color:'var(--fg2)' }}>Loading…</p>
      ) : sessions.length === 0 ? (
        <div style={{
          background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:12,
          padding:'24px', textAlign:'center', color:'var(--fg2)'
        }}>
          No sessions yet. Complete a lesson to see your progress here.
        </div>
      ) : (
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {sessions.map((s, i) => (
            <div key={i} style={{
              background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:10,
              padding:'12px 14px', display:'flex', justifyContent:'space-between', alignItems:'center'
            }}>
              <div>
                <div style={{ fontWeight:600, fontSize:'0.9rem' }}>{s.deck?.replace(/_/g,' ')}</div>
                <div style={{ color:'var(--fg2)', fontSize:'0.8rem' }}>{s.date}</div>
              </div>
              <div style={{ color:'var(--accent)', fontWeight:700 }}>{s.cards_done} cards</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
