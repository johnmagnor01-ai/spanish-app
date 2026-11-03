'use client'
import type { User } from '@supabase/supabase-js'
import type { Tab } from '../App'

type SetTab = (tab: any) => void

export default function HomeTab({ user, setTab }: { user: User; setTab: SetTab }) {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches'
  const name = user.email?.split('@')[0] ?? 'amigo'

  return (
    <div style={{ padding:'24px 20px', maxWidth:480, margin:'0 auto' }}>
      <div style={{ marginBottom:32 }}>
        <h2 style={{ fontSize:'1.5rem', fontWeight:700, color:'var(--fg)', marginBottom:4 }}>
          {greeting}, {name} 👋
        </h2>
        <p style={{ color:'var(--fg2)' }}>Ready to study? Pick a mode below.</p>
      </div>

      {/* Quick start cards */}
      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:32 }}>
        <button onClick={() => setTab('lesson')} style={{
          background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:14,
          padding:'20px', textAlign:'left', cursor:'pointer', display:'flex', alignItems:'center', gap:16
        }}>
          <div style={{ fontSize:'2.5rem' }}>📖</div>
          <div>
            <div style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--fg)', marginBottom:4 }}>Lesson Mode</div>
            <div style={{ fontSize:'0.85rem', color:'var(--fg2)' }}>Audio auto-play — fully hands-free for walking</div>
          </div>
        </button>

        <button onClick={() => setTab('roleplay')} style={{
          background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:14,
          padding:'20px', textAlign:'left', cursor:'pointer', display:'flex', alignItems:'center', gap:16
        }}>
          <div style={{ fontSize:'2.5rem' }}>🎭</div>
          <div>
            <div style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--fg)', marginBottom:4 }}>Role Play</div>
            <div style={{ fontSize:'0.85rem', color:'var(--fg2)' }}>Speak with Migo — errors corrected out loud</div>
          </div>
        </button>

        <button onClick={() => setTab('progress')} style={{
          background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:14,
          padding:'20px', textAlign:'left', cursor:'pointer', display:'flex', alignItems:'center', gap:16
        }}>
          <div style={{ fontSize:'2.5rem' }}>📈</div>
          <div>
            <div style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--fg)', marginBottom:4 }}>My Progress</div>
            <div style={{ fontSize:'0.85rem', color:'var(--fg2)' }}>Study streak, hours logged, skill tracking</div>
          </div>
        </button>
      </div>

      {/* Tip of the day */}
      <div style={{
        background:'var(--accent-lo)', border:'1px solid var(--accent)', borderRadius:12,
        padding:'16px', marginBottom:20
      }}>
        <div style={{ fontSize:'0.75rem', fontWeight:700, color:'var(--accent)', marginBottom:6, textTransform:'uppercase', letterSpacing:'0.08em' }}>
          Your patterns to watch
        </div>
        <ul style={{ color:'var(--fg2)', fontSize:'0.85rem', lineHeight:1.7, paddingLeft:16 }}>
          <li><strong style={{color:'var(--fg)'}}>había</strong> not "hay" for past "there was"</li>
          <li><strong style={{color:'var(--fg)'}}>al principio</strong> not "el primero"</li>
          <li><strong style={{color:'var(--fg)'}}>después de + infinitive</strong> not gerund</li>
          <li><strong style={{color:'var(--fg)'}}>me di cuenta <u>de</u> que</strong> — never drop the DE</li>
        </ul>
      </div>
    </div>
  )
}
