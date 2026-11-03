import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages, scenario } = await req.json()

  const systemPrompt = `You are Migo, a Spanish conversation partner helping an English speaker practice Mexican Spanish.
You are playing the role of: ${scenario}

Rules:
- Always respond in Spanish (Mexican dialect)
- Keep responses short (1-3 sentences max)
- Stay in character for the scenario
- After your Spanish response, add " | " then a brief English translation
- If the user makes a grammar error, gently correct it first in Spanish, then continue the conversation
- Be encouraging and natural

Format: [Spanish response] | [English translation]`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      max_tokens: 150,
      temperature: 0.8,
    }),
  })

  const data = await response.json()
  const text = data.choices?.[0]?.message?.content ?? '¿Puedes repetir eso?'

  const [es, en] = text.split(' | ')

  return NextResponse.json({ es: es?.trim(), en: en?.trim() })
}
