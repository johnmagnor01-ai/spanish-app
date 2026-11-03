'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'
import Auth from '@/components/Auth'
import App from '@/components/App'
import type { User } from '@supabase/supabase-js'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (loading) return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', background:'var(--bg)' }}>
      <div style={{ color:'var(--accent)', fontSize:'2rem', fontWeight:800 }}>Migo</div>
    </div>
  )

  return user ? <App user={user} /> : <Auth />
}
