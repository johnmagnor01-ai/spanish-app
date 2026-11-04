export interface DeckItem {
  es: string
  en: string
  tip: string
}

export interface Deck {
  label: string
  color: string
  source?: string
  items: DeckItem[]
}

export const DECKS: Record<string, Deck> = {
  daily_tener: {
    label: 'Daily: Tener (Preterite vs Imperfect)',
    color: '#f97316',
    source: 'spanishstep.com',
    items: [
      { es: 'Cuando era niño, tenía un perro blanco.', en: 'As a child, I had a white dog.', tip: 'Tenía (imperfect) = possession over an unspecified period. You "had" the dog throughout your childhood — not a single event.' },
      { es: 'Ayer tuve un accidente en la carretera.', en: 'Yesterday I had an accident on the road.', tip: 'Tuve (preterite) = a specific completed event. It happened at a specific moment, not an ongoing state.' },
      { es: 'Cuando empecé la escuela, tenía seis años.', en: 'When I started school, I was six years old.', tip: 'Age always uses tenía (imperfect). Age is a state, not an event. Tuvo seis años is a classic learner error.' },
      { es: 'Tuve suerte en la lotería.', en: 'I got lucky with the lottery.', tip: 'Tuve suerte = got lucky in one specific instance. Compare: tenía suerte = was generally a lucky person.' },
      { es: 'Tenía muchos libros cuando era estudiante.', en: 'I had many books when I was a student.', tip: 'Tenía = ongoing possession during a period. Sets the background scene. Imperfect paints the backdrop of a story.' },
      { es: 'Un día, tuve un examen muy importante.', en: 'One day, I had a very important exam.', tip: 'Tuve advances the story. Un día is a signal word for preterite — it marks a specific moment.' },
      { es: 'Tenía la oportunidad pero no la aproveché.', en: "I had the opportunity but didn't take advantage of it.", tip: 'Tenía = had the opportunity as an ongoing background state. The wasted moment is preterite.' },
      { es: 'Tuve que salir temprano ayer.', en: 'I had to leave early yesterday.', tip: 'Tuve que + infinitive = had to do something (and did it). Tenía que = was supposed to but may not have done it.' },
      { es: 'De niño tenía miedo de los perros.', en: 'As a child, I was afraid of dogs.', tip: 'Tenía miedo = fear as an ongoing state during childhood. Emotions and mental states = imperfect.' },
      { es: 'Ayer tuve una idea increíble.', en: 'Yesterday I had an incredible idea.', tip: 'Tuve una idea = the idea struck at a moment (preterite). Receiving something new, even abstract like an idea = preterite.' },
    ]
  },
  camila: {
    label: 'La vida de Camila',
    color: '#a78bfa',
    items: [
      { es: 'Hola, soy Camila. Nací en Lima en 2002 y crecí en una familia pequeña.', en: "Hi, I'm Camila. I was born in Lima in 2002 and grew up in a small family.", tip: 'Nací / crecí — preterite of nacer and crecer. Both end in -í (yo form).' },
      { es: 'Durante mi infancia, viví cerca de mis abuelos.', en: 'During my childhood, I lived near my grandparents.', tip: 'Viví = I lived (preterite of vivir). -IR verbs: yo viví, ella vivió.' },
      { es: 'Mi abuelo tenía un taller y me enseñó a reparar objetos de madera.', en: 'My grandfather had a workshop and taught me to repair wooden objects.', tip: 'Tenía (imperfect — ongoing state) vs enseñó (preterite — completed action). He HAD a shop (ongoing) and TAUGHT me (one event).' },
      { es: 'Allí aprendí a usar diferentes herramientas.', en: 'There I learned to use different tools.', tip: 'Aprendí = I learned. Aprender → aprendí / aprendió. Regular -ER preterite: yo -í, ella -ió.' },
      { es: 'Había muchas personas que me ayudaron mucho.', en: 'There were many people who helped me a lot.', tip: 'Había = there were (past). NEVER hay for the past. Hay = right now. Había = back then.' },
      { es: 'Construí mi primera mesa con mi abuelo.', en: 'I built my first table with my grandfather.', tip: 'Construí = I built. Construir is irregular: yo construí, ella construyó. Note the Y in ella form.' },
      { es: 'Al principio, todos los muebles estaban en el taller.', en: 'At first, all the furniture was in the workshop.', tip: 'Al principio = at first. NOT el primero. Al principio means "at the beginning / at first."' },
      { es: 'Poco a poco llegaron más clientes.', en: 'Little by little, more clients arrived.', tip: 'Poco a poco = little by little / gradually. Great phrase for telling stories.' },
      { es: 'Me casé con Diego en 2025.', en: 'I got married to Diego in 2025.', tip: 'Casarse = to get married. Me casé (yo), ella se casó. Always reflexive.' },
      { es: 'Fundé un pequeño negocio. Al principio tuve algunas dificultades.', en: 'I founded a small business. At first I had some difficulties.', tip: 'Fundé = I founded. Tuve = I had (irregular preterite of tener). Tener → tuve / tuvo.' },
    ]
  },
  ninez: {
    label: 'La Niñez',
    color: '#5b7fff',
    items: [
      { es: 'nacer', en: 'to be born', tip: 'Think "natal" — natal care, prenatal. Same root.' },
      { es: 'crecer', en: 'to grow up', tip: 'Crece → grows. Think "increase" — same Latin root.' },
      { es: 'la infancia', en: 'childhood', tip: '"Infant" comes from the same root — infans, one who cannot speak.' },
      { es: 'el juguete', en: 'toy', tip: 'From jugar (to play). Juguete = play-thing.' },
      { es: 'el colegio', en: 'school', tip: '"College" in Spanish means K-12 school, not university. Universidad = university.' },
      { es: 'la maestra', en: 'teacher (female)', tip: 'Maestro/maestra. Same root as "master" — a master of their subject.' },
      { es: 'portarse bien', en: 'to behave well', tip: 'Portarse = to conduct oneself. Bien/mal. "Se porta bien" = he/she behaves well.' },
      { es: 'el recreo', en: 'recess / break', tip: 'Think "recreate" — time to recreate yourself. Same root.' },
    ]
  },
  travel: {
    label: 'Travel',
    color: '#22d472',
    items: [
      { es: '¿Dónde queda el baño?', en: 'Where is the bathroom?', tip: 'Quedar = to be located. More natural than estar for permanent locations in Mexico.' },
      { es: 'Quisiera una habitación, por favor.', en: "I'd like a room, please.", tip: 'Quisiera is the polite past-subjunctive of querer. More polite than quiero (I want).' },
      { es: '¿A qué hora sale el camión?', en: 'What time does the bus leave?', tip: 'Camión = bus in Mexico (elsewhere it means truck). Autobus is more universal.' },
      { es: 'Me lo llevaré.', en: "I'll take it.", tip: 'Shopping phrase. Llevar = to take/carry. Me lo llevaré = I will take it (for myself).' },
      { es: '¿Cuánto cuesta?', en: 'How much does it cost?', tip: 'Costar is a stem-changing verb: cuesta / cuestan. Use for prices.' },
      { es: 'Estoy perdido/a.', en: 'I am lost.', tip: 'Perdido (masc) / perdida (fem). Use estar, not ser — it\'s a temporary state.' },
    ]
  },
  work: {
    label: 'Work',
    color: '#fbbf24',
    items: [
      { es: 'la reunión', en: 'meeting', tip: 'From reunir = to gather. Una reunión de negocios = a business meeting.' },
      { es: 'el negocio', en: 'business', tip: 'Think "negotiate" — same root. El negocio = the business/deal.' },
      { es: 'mejorar', en: 'to improve', tip: 'NOT improvisar (to improvise). Mejorar = to get better. Quiero mejorar mi español.' },
      { es: 'el cliente', en: 'client / customer', tip: 'Same word in Spanish. Cliente for individuals, clientela for the client base.' },
      { es: 'la empresa', en: 'company / firm', tip: 'Think "enterprise." La empresa = the company. Also: el negocio, la compañía.' },
      { es: 'cobrar', en: 'to charge / to collect payment', tip: 'Cobrar = to charge someone. Me cobró cien pesos = he charged me 100 pesos.' },
    ]
  }
}

export interface Scenario {
  title: string
  topic: string
  opener: { es: string; en: string }
  replies: { es: string; en: string }[]
}

export const SCENARIOS: Record<string, Scenario> = {
  taco: {
    title: '🌮 Taco Stand',
    topic: 'travel',
    opener: { es: '¡Buenas! ¿Qué le pongo?', en: 'Hey there! What can I get you?' },
    replies: [
      { es: '¿Con todo?', en: 'With everything on it?' },
      { es: '¿Algo más?', en: 'Anything else?' },
      { es: 'Son cuarenta pesos.', en: "That's forty pesos." },
    ]
  },
  market: {
    title: '🛒 Market Haggling',
    topic: 'travel',
    opener: { es: '¿Le puedo ayudar en algo?', en: 'Can I help you with something?' },
    replies: [
      { es: '¿Cuánto quiere pagar?', en: 'How much do you want to pay?' },
      { es: 'Le dejo en ochenta.', en: "I'll give it to you for eighty." },
      { es: 'Trato hecho.', en: 'Deal.' },
    ]
  },
  doctor: {
    title: '🏥 Doctor Visit',
    topic: 'travel',
    opener: { es: '¿Qué síntomas tiene?', en: 'What symptoms do you have?' },
    replies: [
      { es: '¿Desde cuándo se siente así?', en: 'How long have you been feeling this way?' },
      { es: '¿Tiene alguna alergia?', en: 'Do you have any allergies?' },
      { es: 'Le voy a recetar algo.', en: "I'm going to prescribe you something." },
    ]
  },
  landlord: {
    title: '🏠 Talking to Landlord',
    topic: 'work',
    opener: { es: 'Buenas tardes, ¿en qué le puedo ayudar?', en: 'Good afternoon, how can I help you?' },
    replies: [
      { es: '¿De qué tamaño necesita el departamento?', en: 'What size apartment do you need?' },
      { es: 'El alquiler incluye agua y luz.', en: 'Rent includes water and electricity.' },
      { es: '¿Cuándo puede mudarse?', en: 'When can you move in?' },
    ]
  },
  uber: {
    title: '🚗 Uber Driver',
    topic: 'travel',
    opener: { es: '¡Hola! ¿Va al centro, verdad?', en: "Hey! You're going downtown, right?" },
    replies: [
      { es: '¿De dónde es usted?', en: 'Where are you from?' },
      { es: 'Hay mucho tráfico a esta hora.', en: 'There\'s a lot of traffic at this hour.' },
      { es: 'Ya casi llegamos.', en: 'We\'re almost there.' },
    ]
  },
  restaurant: {
    title: '🍽️ Restaurant Order',
    topic: 'travel',
    opener: { es: 'Buenas noches, bienvenidos. ¿Qué van a querer?', en: 'Good evening, welcome. What will you have?' },
    replies: [
      { es: '¿Alguna alergia o restricción alimentaria?', en: 'Any allergies or dietary restrictions?' },
      { es: '¿Se les ofrece algo de tomar?', en: 'Can I get you something to drink?' },
      { es: 'El platillo del día es muy bueno.', en: "Today's special is very good." },
    ]
  },
  pharmacy: {
    title: '💊 Pharmacy',
    topic: 'travel',
    opener: { es: 'Buenas, ¿en qué le ayudo?', en: 'Hello, how can I help you?' },
    replies: [
      { es: '¿Tiene receta médica?', en: 'Do you have a prescription?' },
      { es: '¿Es para adulto o para niño?', en: 'Is it for an adult or a child?' },
      { es: 'Tómelo con las comidas.', en: 'Take it with meals.' },
    ]
  },
  barbershop: {
    title: '💈 Barbershop',
    topic: 'daily',
    opener: { es: '¿Cómo le vamos a dejar el cabello hoy?', en: 'How are we cutting your hair today?' },
    replies: [
      { es: '¿Qué número en los lados?', en: 'What number on the sides?' },
      { es: '¿Le arreglamos la barba también?', en: 'Should we trim the beard too?' },
      { es: 'Quedó muy bien, ¿verdad?', en: "It looks great, doesn't it?" },
    ]
  },
  job_interview: {
    title: '💼 Job Interview',
    topic: 'work',
    opener: { es: 'Mucho gusto, siéntese por favor. Cuénteme un poco sobre usted.', en: 'Nice to meet you, please sit down. Tell me a little about yourself.' },
    replies: [
      { es: '¿Cuál es su mayor fortaleza?', en: 'What is your greatest strength?' },
      { es: '¿Por qué quiere trabajar con nosotros?', en: 'Why do you want to work with us?' },
      { es: '¿Cuándo podría empezar?', en: 'When could you start?' },
    ]
  },
  date: {
    title: '☕ First Date',
    topic: 'daily',
    opener: { es: '¡Hola! Por fin te conozco en persona. ¿Cómo estás?', en: "Hi! I finally meet you in person. How are you?" },
    replies: [
      { es: '¿A qué te dedicas?', en: 'What do you do for work?' },
      { es: '¿Qué haces en tu tiempo libre?', en: 'What do you do in your free time?' },
      { es: 'Oye, la estoy pasando muy bien contigo.', en: "Hey, I'm having a really good time with you." },
    ]
  },
  neighbors: {
    title: '🏘️ Meeting the Neighbors',
    topic: 'daily',
    opener: { es: '¡Hola vecino! Apenas me acabo de mudar. Soy Carmen.', en: "Hi neighbor! I just moved in. I'm Carmen." },
    replies: [
      { es: '¿Cuánto tiempo llevas viviendo aquí?', en: 'How long have you been living here?' },
      { es: 'El barrio es muy tranquilo, ya verás.', en: "The neighborhood is very quiet, you'll see." },
      { es: 'Si necesitas algo, aquí estamos.', en: 'If you need anything, we\'re here.' },
    ]
  },
  lost: {
    title: '🗺️ Asking for Directions',
    topic: 'travel',
    opener: { es: 'Disculpe, ¿me puede ayudar? Estoy un poco perdido.', en: 'Excuse me, can you help me? I\'m a little lost.' },
    replies: [
      { es: '¿Adónde quiere ir?', en: 'Where are you trying to go?' },
      { es: 'Doble a la derecha en el semáforo.', en: 'Turn right at the traffic light.' },
      { es: 'Está a unas tres cuadras de aquí.', en: "It's about three blocks from here." },
    ]
  },
  gym: {
    title: '🏋️ At the Gym',
    topic: 'daily',
    opener: { es: '¿Vas a usar esa máquina o te la puedo robar?', en: 'Are you using that machine or can I steal it?' },
    replies: [
      { es: '¿Cuánto tiempo llevas entrenando?', en: 'How long have you been training?' },
      { es: '¿Qué suplementos tomas?', en: 'What supplements do you take?' },
      { es: 'Mañana me van a doler los músculos.', en: 'My muscles are going to hurt tomorrow.' },
    ]
  },
  friend_plans: {
    title: '📱 Making Plans with a Friend',
    topic: 'daily',
    opener: { es: '¡Oye! ¿Qué vas a hacer este fin de semana?', en: 'Hey! What are you doing this weekend?' },
    replies: [
      { es: '¿Te late ir al concierto el sábado?', en: 'You down to go to the concert Saturday?' },
      { es: 'Podemos ir a comer algo después.', en: 'We can go eat something after.' },
      { es: '¡Ándale! Nos vemos allá.', en: "Let's go! See you there." },
    ]
  },
  complaint: {
    title: '😤 Complaining at a Hotel',
    topic: 'travel',
    opener: { es: 'Buenas noches, ¿en qué le puedo servir?', en: 'Good evening, how can I help you?' },
    replies: [
      { es: 'Le pido una disculpa, señor.', en: "I apologize, sir." },
      { es: 'De inmediato le mandamos a alguien.', en: "We'll send someone right away." },
      { es: 'Le vamos a cambiar de habitación sin costo.', en: "We'll move you to a different room at no charge." },
    ]
  },
  small_talk: {
    title: '☀️ Small Talk (Weather / Weekend)',
    topic: 'daily',
    opener: { es: '¡Qué calor hace hoy, no? ¿Cómo estuvo tu fin de semana?', en: "It's so hot today, right? How was your weekend?" },
    replies: [
      { es: '¿Y tú qué hiciste?', en: 'What did you do?' },
      { es: 'Yo fui a ver a mi familia.', en: 'I went to see my family.' },
      { es: 'Esta semana viene lloviendo.', en: 'It\'s been rainy this week.' },
    ]
  },
  arguing: {
    title: '😠 Disagreement with a Friend',
    topic: 'daily',
    opener: { es: 'Oye, necesito hablar contigo sobre algo que me molestó.', en: 'Hey, I need to talk to you about something that bothered me.' },
    replies: [
      { es: 'No era mi intención hacerte sentir así.', en: "It wasn't my intention to make you feel that way." },
      { es: 'Entiendo tu punto, pero yo lo vi diferente.', en: 'I understand your point, but I saw it differently.' },
      { es: 'Creo que nos malentendimos.', en: 'I think we misunderstood each other.' },
    ]
  },
  shopping_clothes: {
    title: '👕 Clothes Shopping',
    topic: 'travel',
    opener: { es: '¡Hola! ¿Busca algo en especial?', en: 'Hi! Are you looking for something specific?' },
    replies: [
      { es: '¿Qué talla usa?', en: 'What size do you wear?' },
      { es: 'Tenemos ese mismo modelo en azul también.', en: 'We have that same style in blue too.' },
      { es: 'El probador está al fondo a la derecha.', en: 'The fitting room is in the back to the right.' },
    ]
  },
  bank: {
    title: '🏦 At the Bank',
    topic: 'work',
    opener: { es: 'Buenos días, ¿en qué le puedo ayudar hoy?', en: 'Good morning, how can I help you today?' },
    replies: [
      { es: '¿Va a hacer un depósito o un retiro?', en: 'Are you making a deposit or withdrawal?' },
      { es: 'Necesito una identificación oficial.', en: 'I need a government-issued ID.' },
      { es: 'Su saldo disponible es de tres mil pesos.', en: 'Your available balance is three thousand pesos.' },
    ]
  },
  party: {
    title: '🎉 At a Party',
    topic: 'daily',
    opener: { es: '¡Oye! No creo que nos hayamos presentado. Soy Rodrigo.', en: "Hey! I don't think we've been introduced. I'm Rodrigo." },
    replies: [
      { es: '¿Cómo conoces al anfitrión?', en: 'How do you know the host?' },
      { es: '¿De dónde eres tú?', en: 'Where are you from?' },
      { es: 'Esta música está muy buena, ¿verdad?', en: "This music is really good, right?" },
    ]
  },
}


export const ERROR_PATTERNS = [
  { re: /improv(is|iz|and|ando)/i, say: 'Di "mejorar", no "improvisar". Mejorar.' },
  { re: /\bestab[ao]\b.{0,20}\b(un|una)\b/i, say: 'Para "there was", di "había". Había, no estaba.' },
  { re: /me di cuenta que/i, say: 'Falta la DE. Di "me di cuenta DE que." Siempre con DE.' },
  { re: /en la (últ|ult|pasad)/i, say: 'Di "la semana pasada", sin "en".' },
  { re: /después de \w+(ando|iendo)/i, say: 'Después de necesita infinitivo, no gerundio.' },
  { re: /\bel primero\b/i, say: 'Di "al principio", no "el primero".' },
  { re: /\bhay\b.{0,8}\bayer\b|\bayer\b.{0,8}\bhay\b/i, say: 'En el pasado di "había", no "hay".' },
  { re: /\bpublicado\b/i, say: '¿Quisiste decir publicidad? Publicado = published, publicidad = advertising.' },
]
