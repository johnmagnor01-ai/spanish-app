import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as Blob
    const ext = (formData.get('ext') as string) || 'webm'

    if (!file || file.size < 500) {
      return NextResponse.json({ error: 'Audio too short or empty', size: file?.size }, { status: 400 })
    }

    console.log(`Transcribe: size=${file.size}, ext=${ext}, type=${file.type}`)

    const openaiForm = new FormData()
    // Always send as webm — Whisper handles it best; Safari mp4 also works
    openaiForm.append('file', file, `audio.${ext}`)
    openaiForm.append('model', 'whisper-1')
    openaiForm.append('language', 'es')
    openaiForm.append('response_format', 'json')

    const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
      body: openaiForm,
    })

    const raw = await res.text()
    console.log(`Whisper response ${res.status}: ${raw.slice(0, 300)}`)

    if (!res.ok) {
      return NextResponse.json({ error: 'Whisper API error', status: res.status, detail: raw }, { status: 500 })
    }

    let data: { text?: string }
    try { data = JSON.parse(raw) } catch { data = {} }

    return NextResponse.json({ text: data.text ?? '' })
  } catch (e) {
    console.error('Transcribe route error:', e)
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
