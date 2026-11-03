import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Forward to OpenAI Whisper using server-side key
    const openaiForm = new FormData()
    const file = formData.get('file') as Blob
    const ext = (formData.get('ext') as string) || 'webm'
    openaiForm.append('file', file, `audio.${ext}`)
    openaiForm.append('model', 'whisper-1')
    openaiForm.append('language', 'es')

    const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
      body: openaiForm,
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Whisper error:', err)
      return NextResponse.json({ error: 'Transcription failed', detail: err }, { status: 500 })
    }

    const data = await res.json()
    return NextResponse.json({ text: data.text })
  } catch (e) {
    console.error('Transcribe route error:', e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
