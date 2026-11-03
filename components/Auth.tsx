'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handle(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setMsg(error.message)
    } else {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setMsg(error.message)
      else setMsg('Check your email to confirm your account.')
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center',
      background:'var(--bg)', padding:'24px'
    }}>
      <div style={{ width:'100%', maxWidth:'360px' }}>
        <h1 style={{ fontSize:'2.5rem', fontWeight:800, color:'var(--accent)', textAlign:'center', marginBottom:8 }}>Migo</h1>
        <p style={{ color:'var(--fg2)', textAlign:'center', marginBottom:32 }}>Your Spanish study partner</p>

        <form onSubmit={handle} style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <input
            type="email" placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)} required
            style={{
              background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:10,
              padding:'14px 16px', color:'var(--fg)', fontSize:'1rem', outline:'none'
            }}
          />
          <input
            type="password" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)} required
            style={{
              background:'var(--bg2)', border:'1px solid var(--border)', borderRadius:10,
              padding:'14px 16px', color:'var(--fg)', fontSize:'1rem', outline:'none'
            }}
          />
          {msg && <p style={{ color: msg.includes('Check') ? 'var(--green)' : 'var(--red)', fontSize:'0.9rem' }}>{msg}</p>}
          <button type="submit" disabled={loading} style={{
            background:'var(--accent)', color:'#fff', border:'none', borderRadius:10,
            padding:'14px', fontSize:'1rem', fontWeight:700, cursor:'pointer',
            opacity: loading ? 0.6 : 1
          }}>
            {loading ? '...' : mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p style={{ textAlign:'center', marginTop:20, color:'var(--fg2)', fontSize:'0.9rem' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            style={{ color:'var(--accent)', background:'none', border:'none', cursor:'pointer', fontWeight:600 }}>
            {mode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  )
}
