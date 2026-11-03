'use client'
import { useState } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import HomeTab from './tabs/HomeTab'
import LessonTab from './tabs/LessonTab'
import RolePlayTab from './tabs/RolePlayTab'
import ProgressTab from './tabs/ProgressTab'

type Tab = 'home' | 'lesson' | 'roleplay' | 'progress'

export default function App({ user }: { user: User }) {
  const [tab, setTab] = useState<Tab>('home')
  const supabase = createClient()

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: '⌂' },
    { id: 'lesson', label: 'Lesson', icon: '📖' },
    { id: 'roleplay', label: 'Role Play', icon: '🎭' },
    { id: 'progress', label: 'Progress', icon: '📈' },
  ]

  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100vh', background:'var(--bg)' }}>
      {/* Header */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px 20px', borderBottom:'1px solid var(--border)', flexShrink:0,
        paddingTop:'calc(14px + env(safe-area-inset-top, 0px))'
      }}>
        <span style={{ fontSize:'1.4rem', fontWeight:800, color:'var(--accent)' }}>Migo</span>
        <button onClick={() => supabase.auth.signOut()} style={{
          background:'none', border:'none', color:'var(--fg2)', fontSize:'0.8rem', cursor:'pointer'
        }}>
          Sign out
        </button>
      </div>

      {/* Content */}
      <div style={{ flex:1, overflow:'auto' }}>
        {tab === 'home' && <HomeTab user={user} setTab={setTab} />}
        {tab === 'lesson' && <LessonTab user={user} />}
        {tab === 'roleplay' && <RolePlayTab user={user} />}
        {tab === 'progress' && <ProgressTab user={user} />}
      </div>

      {/* Bottom nav */}
      <div style={{
        display:'flex', borderTop:'1px solid var(--border)',
        paddingBottom:'env(safe-area-inset-bottom, 0px)',
        background:'var(--bg2)', flexShrink:0
      }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex:1, display:'flex', flexDirection:'column', alignItems:'center',
            padding:'10px 0', background:'none', border:'none', cursor:'pointer',
            color: tab === t.id ? 'var(--accent)' : 'var(--fg2)',
            fontSize:'0.7rem', fontWeight: tab === t.id ? 700 : 400, gap:2
          }}>
            <span style={{ fontSize:'1.3rem' }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
