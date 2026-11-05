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
  },
  ser_vs_estar: {
    label: 'Ser vs Estar',
    color: '#ec4899',
    items: [
      { es: 'Soy de México. / Estoy en México.', en: 'I am from Mexico. / I am in Mexico.', tip: 'Ser = origin (permanent). Estar = location (temporary). Where you\'re FROM vs where you ARE right now.' },
      { es: 'El café está frío.', en: 'The coffee is cold.', tip: 'Estar for temporary states. The coffee isn\'t always cold — it changed. Use estar for conditions that can change.' },
      { es: 'Mi abuela es muy seria.', en: 'My grandmother is very serious.', tip: 'Ser for personality traits. It\'s part of who she is, not a temporary mood.' },
      { es: 'Estoy cansado hoy.', en: 'I am tired today.', tip: 'Estar for how you feel right now. "Hoy" is the clue — temporary. Soy cansado would mean you\'re a tired person by nature.' },
      { es: 'La boda es en Cancún.', en: 'The wedding is in Cancún.', tip: 'Ser for events — where/when an event takes place. Even though it\'s location, events use ser.' },
      { es: 'Ese chico está muy guapo hoy.', en: 'That guy looks really good today.', tip: 'Estar with looks = how someone looks right now. Ser guapo = handsome by nature. Estar guapo = looking good today.' },
      { es: 'La sopa está lista.', en: 'The soup is ready.', tip: 'Estar for results of change — the soup went from not ready to ready. Listo with estar = ready. Listo with ser = clever/smart.' },
      { es: 'Somos amigos desde la infancia.', en: 'We\'ve been friends since childhood.', tip: 'Ser for relationships. Relationships are defining characteristics, not temporary states.' },
      { es: '¿Cómo estás? — Estoy bien, gracias.', en: 'How are you? — I\'m fine, thanks.', tip: 'Estar for greetings and how you feel. ¿Cómo eres? asks what kind of person you are (personality). ¿Cómo estás? asks how you\'re doing.' },
      { es: 'Está muerto. / Es un muerto.', en: 'He is dead (now). / He is a dead man (story character).', tip: 'Even death: estar muerto = the state of being dead. Ser un muerto = used for fictional characters or figures of speech.' },
    ]
  },
  por_vs_para: {
    label: 'Por vs Para',
    color: '#06b6d4',
    items: [
      { es: 'Este regalo es para ti.', en: 'This gift is for you.', tip: 'Para = recipient/destination. The gift is GOING TO you. Think "para = for the purpose of reaching someone."' },
      { es: 'Gracias por el regalo.', en: 'Thank you for the gift.', tip: 'Por = reason/cause. You\'re thanking them BECAUSE OF the gift. Por points backward to a cause.' },
      { es: 'Salgo para Guadalajara mañana.', en: 'I leave for Guadalajara tomorrow.', tip: 'Para = destination. You\'re heading TOWARD Guadalajara. Movement toward a destination = para.' },
      { es: 'Pasé por Guadalajara en mi viaje.', en: 'I passed through Guadalajara on my trip.', tip: 'Por = movement through/along a place. You moved THROUGH it, not toward it as a destination.' },
      { es: 'Necesito terminar esto para el viernes.', en: 'I need to finish this by Friday.', tip: 'Para = deadline. The work is heading TOWARD Friday as its endpoint.' },
      { es: 'Estudié por tres horas.', en: 'I studied for three hours.', tip: 'Por = duration of time. How LONG something lasted. Three hours is a span, not a deadline.' },
      { es: 'Te llamo para hablar del proyecto.', en: 'I\'m calling you to talk about the project.', tip: 'Para + infinitive = purpose/goal. You\'re calling IN ORDER TO talk. Para expresses goals.' },
      { es: 'Me pagaron cien dólares por el trabajo.', en: 'They paid me a hundred dollars for the work.', tip: 'Por = exchange. You got paid IN EXCHANGE FOR the work. Any trade or swap = por.' },
      { es: 'Para ser principiante, hablas muy bien.', en: 'For a beginner, you speak really well.', tip: 'Para = considering / given that. "Given that you\'re a beginner" — sets a standard for comparison.' },
      { es: 'Hablan por teléfono cada noche.', en: 'They talk on the phone every night.', tip: 'Por = means of communication/transportation. Through the phone. Por teléfono, por correo, por avión.' },
    ]
  },
  subjunctive_intro: {
    label: 'Subjunctive Basics',
    color: '#8b5cf6',
    items: [
      { es: 'Quiero que vengas a la fiesta.', en: 'I want you to come to the party.', tip: 'Querer que + subjunctive. Two different subjects = subjunctive. "I want" (yo) → "you come" (tú). The trigger is querer que.' },
      { es: 'Espero que todo salga bien.', en: 'I hope everything goes well.', tip: 'Esperar que + subjunctive. Hope/wish triggers it. "Salga" is the subjunctive of salir.' },
      { es: 'Es importante que llegues a tiempo.', en: 'It\'s important that you arrive on time.', tip: 'Es + adjective + que = subjunctive. Es importante/necesario/bueno/malo que → all trigger subjunctive.' },
      { es: 'No creo que tenga razón.', en: 'I don\'t think he\'s right.', tip: 'Negative belief = subjunctive. "No creo que" triggers it. Creo que (affirmative) = indicative. No creo que = subjunctive.' },
      { es: 'Busco un apartamento que tenga piscina.', en: 'I\'m looking for an apartment that has a pool.', tip: 'Unknown/hypothetical thing = subjunctive. The apartment doesn\'t exist yet in your mind — it\'s a wish, not a specific one.' },
      { es: 'Cuando llegues, llámame.', en: 'When you arrive, call me.', tip: 'Cuando + future event = subjunctive. The arrival hasn\'t happened yet. Cuando + past/habitual = indicative.' },
      { es: 'Ojalá que no llueva mañana.', en: 'Hopefully it won\'t rain tomorrow.', tip: 'Ojalá ALWAYS takes subjunctive. It comes from Arabic "inshallah." Ojalá que + subjunctive, always.' },
      { es: 'Me alegra que estés aquí.', en: 'I\'m glad you\'re here.', tip: 'Emotions + que = subjunctive. Me alegra, me sorprende, me molesta, me encanta que → all trigger subjunctive.' },
    ]
  },
  mexico_slang: {
    label: '🇲🇽 Mexican Slang',
    color: '#10b981',
    items: [
      { es: '¡Qué padre!', en: 'How cool! / Awesome!', tip: 'Padre literally means "father" but in Mexico it means cool/great. ¡Qué padre! = How cool! Está muy padre = It\'s really cool.' },
      { es: 'No manches.', en: 'No way. / Are you serious? / Come on.', tip: 'Polite version of a stronger expression. Used for surprise, frustration, or disbelief. Very common, totally safe to say.' },
      { es: 'Órale.', en: 'Okay / Let\'s go / Right on / Wow', tip: 'The most versatile Mexican word. Agreement: "Órale" = okay, deal. Encouragement: "¡Órale!" = let\'s go! Surprise: "Órale..." = wow.' },
      { es: '¿Qué onda?', en: 'What\'s up? / What\'s going on?', tip: 'Onda = wave/vibe. ¿Qué onda? = what\'s the vibe? Very casual greeting. ¿Qué onda contigo? = what\'s up with you?' },
      { es: 'Está chido/chida.', en: 'It\'s cool / It\'s nice.', tip: 'Chido (masc) / chida (fem). Very common in Mexico City. ¡Está muy chido! = It\'s really cool! Similar to padre.' },
      { es: 'Me cae bien / Me cae mal.', en: 'I like him/her / I don\'t like him/her (as a person).', tip: 'Caer bien/mal = to make a good/bad impression on someone. Me cae bien = I like them (personality). NOT for objects — that\'s me gusta.' },
      { es: 'Ahorita.', en: 'In a moment / Right now / Later (vague)', tip: 'THE most confusing Mexican word. Ahorita can mean right this second, in a few minutes, or in a few hours. Context is everything. "Ahorita voy" = I\'m coming (eventually).' },
      { es: 'No hay bronca.', en: 'No problem. / No worries.', tip: 'Bronca = problem/fight. No hay bronca = no problem. Similar to no hay problema but more casual and very Mexican.' },
      { es: 'Cuate / Güey (wey)', en: 'Buddy / Dude / Bro', tip: 'Cuate = buddy/twin (Aztec origin). Güey/wey = dude/bro (super common, can be rude with wrong tone). Between friends it\'s fine.' },
      { es: '¡Ándale!', en: 'Come on! / Hurry up! / That\'s it! / Exactly!', tip: 'Multi-purpose like órale. ¡Ándale, apúrate! = come on, hurry up! ¡Ándale! alone = exactly / that\'s right.' },
    ]
  },
  common_mistakes: {
    label: '⚠️ Common Mistakes',
    color: '#ef4444',
    items: [
      { es: 'Me di cuenta DE que estaba equivocado.', en: 'I realized I was wrong.', tip: 'NEVER drop the DE. "Darse cuenta de que" always needs the DE. "Me di cuenta que" is one of the most common errors.' },
      { es: 'Había mucha gente en la fiesta.', en: 'There were a lot of people at the party.', tip: 'Past "there was/were" = había, NEVER "hubieron" (common error) or "estaba." Había is always singular even with plural nouns.' },
      { es: 'Al principio no entendía nada.', en: 'At first I didn\'t understand anything.', tip: '"At first" = al principio. NOT "el primero" or "en el primer." Al principio is a fixed phrase.' },
      { es: 'Tuve que estudiar mucho ayer.', en: 'I had to study a lot yesterday.', tip: 'Tuve que = had to and DID it. Tenía que = was supposed to (may or may not have done it). The difference matters.' },
      { es: 'La semana pasada fui al gimnasio.', en: 'Last week I went to the gym.', tip: '"Last week" = la semana pasada. No "en" before it. Never "en la semana pasada." Same for: el año pasado, el mes pasado.' },
      { es: 'Llevo tres años viviendo aquí.', en: 'I\'ve been living here for three years.', tip: 'Llevar + time + gerund = how long you\'ve been doing something. Much more natural than "he vivido aquí por tres años."' },
      { es: 'Se me olvidó llamarte.', en: 'I forgot to call you.', tip: 'Olvidarse = reflexive. The standard form is "se me olvidó" — literally "it forgot itself to me." Never just "olvidé llamarte."' },
      { es: 'ÉL trabaja mucho. / EL trabajo es difícil.', en: 'HE works a lot. / THE work is hard.', tip: 'Él (with accent) = he. El (no accent) = the. The accent mark is the entire difference between a pronoun and an article.' },
    ]
  },
  feelings_emotions: {
    label: 'Feelings & Emotions',
    color: '#f43f5e',
    items: [
      { es: 'Estoy harto/a de esto.', en: 'I\'m fed up with this.', tip: 'Harto = fed up / sick of. Estoy harto de trabajar tanto = I\'m sick of working so much. Strong but common.' },
      { es: 'Me da vergüenza.', en: 'It embarrasses me. / I\'m embarrassed.', tip: 'Vergüenza = shame/embarrassment. "Me da vergüenza" = it gives me embarrassment. NOT "estoy embarazada" — that means pregnant!' },
      { es: 'Tengo ganas de salir.', en: 'I feel like going out. / I want to go out.', tip: 'Tener ganas de + infinitive = to feel like doing something. Very natural. Tengo muchas ganas = I really want to.' },
      { es: 'Me cae gordo ese tipo.', en: 'I can\'t stand that guy.', tip: 'Caer gordo = to rub someone the wrong way. Me cae gordo = I can\'t stand him. Stronger than me cae mal.' },
      { es: 'Estoy de buen/mal humor.', en: 'I\'m in a good/bad mood.', tip: 'De buen humor / de mal humor. Humor in Spanish = mood, not humor/funny. "Está de muy buen humor hoy" = he\'s in a great mood today.' },
      { es: 'Me importa un comino.', en: 'I couldn\'t care less.', tip: 'Importar = to matter. Me importa = it matters to me. Me importa un comino (a cumin seed) = it matters to me as much as a cumin seed = not at all.' },
      { es: 'Se me parte el corazón.', en: 'It breaks my heart.', tip: 'Partirse el corazón = to break your heart. Se me parte = it breaks on me. Very natural emotional expression.' },
      { es: 'Estoy hasta la madre.', en: 'I\'m completely fed up / over it.', tip: 'Mexican expression meaning totally done/fed up. Strong but very common. Use with people you know well.' },
    ]
  },
  verbs_daily: {
    label: 'Essential Daily Verbs',
    color: '#0ea5e9',
    items: [
      { es: 'Hay que aprovechar el tiempo.', en: 'You have to make the most of the time.', tip: 'Aprovechar = to take advantage of / make the most of. Aprovechar una oportunidad = seize an opportunity. Very useful verb.' },
      { es: 'Me tardé una hora en llegar.', en: 'It took me an hour to get there.', tip: 'Tardarse = to take (time). Me tardé = it took me. ¿Cuánto te tardas? = how long does it take you? Very Mexican usage.' },
      { es: 'Hay que fijarse bien.', en: 'You have to pay close attention.', tip: 'Fijarse = to notice / pay attention. ¡Fíjate! = look / check this out / pay attention. Super common in conversation.' },
      { es: 'Se me antoja una pizza.', en: 'I\'m craving a pizza.', tip: 'Antojarse = to crave. Se me antoja = I\'m craving it. ¿Qué se te antoja? = what are you in the mood for? Very Mexican.' },
      { es: 'Voy a echarle ganas.', en: 'I\'m going to give it my all / try hard.', tip: 'Echarle ganas = to put in effort. ¡Échale ganas! = give it your all! One of the most encouraging phrases in Mexican Spanish.' },
      { es: 'Me choca el tráfico.', en: 'I hate traffic. / Traffic bugs me.', tip: 'Chocar = to crash, but also to annoy/hate. Me choca = it really bothers me. Me choca cuando... = I hate it when...' },
      { es: 'Se armó un relajo.', en: 'It turned into chaos / a mess.', tip: 'Armarse un relajo = things got chaotic. Se armó = it set itself up. Relajo = mess/chaos. Mexican slang for when things go sideways.' },
      { es: 'Voy a platicar con él.', en: 'I\'m going to talk / chat with him.', tip: 'Platicar = to chat/talk (very Mexican). More casual than hablar. ¿Platicamos? = shall we talk? Use this over conversar.' },
    ]
  },
  numbers_money: {
    label: '💰 Numbers & Money',
    color: '#84cc16',
    items: [
      { es: 'Son doscientos cincuenta pesos.', en: 'It\'s two hundred and fifty pesos.', tip: 'Doscientos (200). Numbers 200-900: use -cientos for masc, -cientas for fem. Doscientas páginas (fem). Doscientos pesos (masc).' },
      { es: '¿Me puede dar un descuento?', en: 'Can you give me a discount?', tip: 'Descuento = discount. ¿Hay descuento? = is there a discount? ¿Me hace precio? = can you give me a deal? (more casual)' },
      { es: 'Se me acabó el dinero.', en: 'I ran out of money.', tip: 'Acabarse = to run out of. Se me acabó = it ran out on me. Se me acabó la gasolina = I ran out of gas. Very natural construction.' },
      { es: 'Voy a pagar en efectivo / con tarjeta.', en: 'I\'m going to pay cash / with a card.', tip: 'Efectivo = cash. Con tarjeta = with card. ¿Aceptan tarjeta? = do you accept cards? Essential phrases for Mexico.' },
      { es: 'Me salió caro / barato.', en: 'It turned out expensive / cheap for me.', tip: 'Salir = to turn out. Me salió caro = it ended up costing me a lot. ¿Cómo te salió? = how much did it cost you?' },
      { es: 'A medias.', en: 'Split the bill / 50-50.', tip: 'A medias = split it down the middle. ¿Vamos a medias? = should we split it? Very common when paying with friends.' },
    ]
  },
  connecting_words: {
    label: 'Connecting Words',
    color: '#f97316',
    items: [
      { es: 'Sin embargo, no estoy de acuerdo.', en: 'However, I don\'t agree.', tip: 'Sin embargo = however/nevertheless. More formal than pero. Use it to contrast ideas in writing or serious conversation.' },
      { es: 'O sea, lo que quiero decir es...', en: 'I mean, what I\'m trying to say is...', tip: 'O sea = I mean / in other words. The most common filler in Mexican Spanish. Like "like" or "you know" in English.' },
      { es: 'A pesar de todo, salió bien.', en: 'Despite everything, it turned out fine.', tip: 'A pesar de = despite / in spite of. A pesar de que + verb. A pesar de todo = despite everything.' },
      { es: 'Además, tengo otra razón.', en: 'Besides, I have another reason.', tip: 'Además = besides / also / furthermore. Adds to what you said. Además de eso = on top of that.' },
      { es: 'De todas formas, ya no importa.', en: 'Either way, it doesn\'t matter anymore.', tip: 'De todas formas = anyway / either way. De todas maneras means the same thing. Both are very common.' },
      { es: 'Al fin y al cabo, somos familia.', en: 'When all is said and done, we\'re family.', tip: 'Al fin y al cabo = at the end of the day / when all is said and done. Great phrase for conclusions.' },
      { es: 'Es que no tuve tiempo.', en: 'The thing is, I didn\'t have time.', tip: 'Es que = the thing is / it\'s that. Used to introduce an excuse or explanation. Very natural. "No fui, es que estaba cansado."' },
      { es: 'Siempre y cuando me avises.', en: 'As long as you let me know.', tip: 'Siempre y cuando + subjunctive = as long as. Conditional permission. Puedes ir siempre y cuando llegues antes de las diez.' },
    ]
  }
}

  verbs_regular: {
    label: '📄 Regular Verbs (Present & Past)',
    color: '#3b82f6',
    items: [
      { es: 'hablar → hablo / hablé / habló', en: 'to speak → I speak / I spoke / he spoke', tip: '-AR pattern: yo hablé, él habló. The accent on hablé (yo) is what separates it from habla (he speaks, present).' },
      { es: 'trabajar → trabajo / trabajé / trabajó', en: 'to work → I work / I worked / he worked', tip: '-AR verbs all follow this exact pattern. Memorize hablé/habló and you know all regular -AR past tense.' },
      { es: 'comprar → compro / compré / compró', en: 'to buy → I buy / I bought / he bought', tip: '-AR yo past always ends in -é (with accent). Él/ella always ends in -ó (with accent). No accent = present tense.' },
      { es: 'comer → como / comí / comió', en: 'to eat → I eat / I ate / he ate', tip: '-ER past: yo comí, él comió. Note the accent on comí and comió. -ER and -IR past tense share the same endings.' },
      { es: 'beber → bebo / bebí / bebió', en: 'to drink → I drink / I drank / he drank', tip: '-ER verbs: yo -í, él -ió. Same as -IR verbs. So comer, beber, vivir, escribir all share these past endings.' },
      { es: 'aprender → aprendo / aprendí / aprendió', en: 'to learn → I learn / I learned / he learned', tip: 'Aprende (present) vs aprendió (past). The accent on aprendió is the only difference from aprende.' },
      { es: 'vivir → vivo / viví / vivió', en: 'to live → I live / I lived / he lived', tip: '-IR past: same as -ER. Yo viví, él vivió. Viví (I lived) vs vivo (I live) — accent changes everything.' },
      { es: 'escribir → escribo / escribí / escribió', en: 'to write → I write / I wrote / he wrote', tip: 'Key rule: -ER and -IR verbs have identical past tense endings. Only -AR is different.' },
    ]
  },
  verbs_irregular: {
    label: '📄 Irregular Verbs (Past Tense)',
    color: '#7c3aed',
    items: [
      { es: 'tener → tuve / tuvo', en: 'to have → I had / he had', tip: 'Tuve/tuvo = no accent marks on irregulars! All the verbs in this group lose their accents. Tener → tuve/tuvo/tuviste/tuvimos/tuvieron.' },
      { es: 'estar → estuve / estuvo', en: 'to be → I was / he was', tip: 'Estuve/estuvo follows the same pattern as tuve/tuvo. Same endings: -uve, -uvo, -uviste, -uvimos, -uvieron.' },
      { es: 'poder → pude / pudo', en: 'to be able to → I could / he could', tip: 'Pude/pudo. Same family: tuve, estuve, pude, puse, supe. All have irregular stems + same endings.' },
      { es: 'poner → puse / puso', en: 'to put → I put / he put', tip: 'Puse/puso. Memory trick: "I PUSE my foot in it." All these irregulars have no accent marks — that\'s how you know.' },
      { es: 'saber → supe / supo', en: 'to know/find out → I found out / he found out', tip: 'Supe/supo. Saber in the past often means "found out" not just "knew." Supe la verdad = I found out the truth.' },
      { es: 'venir → vine / vino', en: 'to come → I came / he came', tip: 'Vine/vino. Vino also means wine — same word, different context. Mi amigo vino = my friend came.' },
      { es: 'hacer → hice / hizo', en: 'to do/make → I did / he did', tip: 'Hice/hizo — note the spelling change: hice (c) but hizo (z). The z prevents it sounding like "hiso." Classic spelling rule.' },
      { es: 'decir → dije / dijo', en: 'to say → I said / he said', tip: 'Dije/dijo. Decir is totally irregular. The stem changes to dij-. Dijiste, dijimos, dijeron (note: NO i in dijeron).' },
      { es: 'ir / ser → fui / fue', en: 'to go / to be → I went/was / he went/was', tip: 'Fui and fue serve BOTH ir and ser in the past. Context tells you which. Fui al mercado = I went. Fue difícil = it was hard.' },
    ]
  },
  indirect_pronouns: {
    label: '💬 Me, Te, Le, Nos, Les',
    color: '#7c3aed',
    items: [
      { es: 'me → to/for me', en: 'indirect object: me', tip: 'Me goes BEFORE the verb. Mi mamá me hizo tacos = My mom made me tacos. The action goes TO me.' },
      { es: 'te → to/for you', en: 'indirect object: you', tip: '¿Te puedo preguntar algo? = Can I ask you something? Te is for the person you\'re talking to directly.' },
      { es: 'le → to/for him/her', en: 'indirect object: him or her', tip: 'Le is for a third person (singular). El mesero le trajo la cuenta = The waiter brought HIM the check. One person = le.' },
      { es: 'nos → to/for us', en: 'indirect object: us', tip: 'Nos mandaron un mensaje = They sent US a message. Nos always refers to the group you\'re part of.' },
      { es: 'les → to/for them', en: 'indirect object: them', tip: 'Les dije la verdad = I told THEM the truth. Multiple people = les. The only difference from le is singular vs plural.' },
      { es: 'Mi abuela me enseña recetas.', en: 'My grandma teaches me recipes.', tip: '"a mí" in the sentence → use me. When you see "a mí" it confirms me. When you see "a él/ella" it confirms le.' },
      { es: 'Le dije tres veces que no lo hiciera.', en: 'I told him three times not to do it.', tip: 'Le = to him. Dije = I told (preterite). After "told him not to" you need subjunctive: hiciera (not hizo).' },
      { es: 'Yo le doy muy buenos consejos a mi hermano.', en: 'I give my brother very good advice.', tip: '"a mi hermano" = one person = le. If it were "a mis hermanos" (plural) you\'d use les instead.' },
      { es: 'El gerente les explica el problema.', en: 'The manager explains the problem to them.', tip: '"a sus empleados" = multiple people = les. Always ask: one person or many? That\'s the only choice between le and les.' },
      { es: 'Te puedo llevar si quieres.', en: 'I can give you a ride if you want.', tip: 'Te = to/for you. Super useful offer. Swap te for le (for him/her) or les (for them) to change who you\'re offering.' },
      { es: '¿Me puedes explicar eso?', en: 'Can you explain that to me?', tip: 'Me before the verb = to me. Notice the verb order: me + verb. Never put the pronoun after the conjugated verb.' },
      { es: 'Nos mandaron un mensaje raro anoche.', en: 'They sent us a weird message last night.', tip: 'Nos = to us. Mandaron = they sent (preterite). The subject "they" is implied — no need to say ellos.' },
    ]
  },
  object_lo_la: {
    label: '🎯 Lo, La, Los, Las (Direct)',
    color: '#0891b2',
    items: [
      { es: 'lo → it/him (masculine)', en: 'direct object: lo', tip: 'Lo replaces a masculine noun. ¿Dónde está el libro? No lo veo. = Where\'s the book? I don\'t see IT. Lo = the book (masculine).' },
      { es: 'la → it/her (feminine)', en: 'direct object: la', tip: 'La replaces a feminine noun. ¿Tienes la llave? Sí, la tengo. = Do you have the key? Yes, I have IT. La = la llave (feminine).' },
      { es: 'los → them (masculine plural)', en: 'direct object: them (masc)', tip: 'Los for masculine plural nouns. ¿Compraste los tacos? Sí, los compré. = Did you buy the tacos? Yes, I bought THEM.' },
      { es: 'las → them (feminine plural)', en: 'direct object: them (fem)', tip: 'Las for feminine plural. ¿Tienes las llaves? No las encuentro. = Do you have the keys? I can\'t find THEM.' },
      { es: 'Lo hice sin pensar.', en: 'I did it without thinking.', tip: 'Lo hice = I did IT. Lo here refers to the action/thing. Hice is irregular past of hacer: yo hice, él hizo.' },
      { es: 'No lo puedo creer.', en: 'I can\'t believe it.', tip: 'Super common phrase. Lo = it (the situation). You\'ll hear this constantly in Mexican Spanish.' },
      { es: 'Ya lo sé.', en: 'I already know (it).', tip: 'Ya lo sé = I already know. Ya = already. Lo sé sounds more natural than just sé alone in Mexican Spanish.' },
      { es: 'Te habría llamado pero mi celular se murió justo cuando estaba a punto de hacerlo.', en: 'I would have called you but my phone died right when I was about to.', tip: 'Hacerlo = to do IT. Lo at the end of an infinitive refers back to the action. A punto de = about to (memorize this phrase).' },
      { es: 'Lo hizo de todas formas.', en: 'He did it anyway.', tip: 'De todas formas = anyway/regardless. Super useful. Lo hizo = he did it. Lo refers back to whatever action was discussed.' },
      { es: 'No lo entiendo para nada.', en: 'I don\'t understand it at all.', tip: 'Para nada = not at all. Stronger than just no. No lo entiendo = I don\'t understand it.' },
    ]
  },
  hacer_irregular: {
    label: '⚡ Hice, Hizo & Key Irregulars',
    color: '#dc2626',
    items: [
      { es: 'hacer → hice / hizo', en: 'to do/make → I did / he did', tip: 'SPELLING RULE: hice (c) but hizo (z). Why? To keep the "s" sound. If it were "hizo" with c it would sound like "ee-ko." Classic rule.' },
      { es: 'Lo hice yo solo.', en: 'I did it by myself.', tip: 'Hice = I did/made. Yo solo = by myself. Adding yo is optional but adds emphasis. ¿Quién lo hizo? Yo lo hice.' },
      { es: '¿Qué hiciste ayer?', en: 'What did you do yesterday?', tip: 'Hiciste = you did (tú). Full conjugation: hice, hiciste, hizo, hicimos, hicieron. Notice no accent on hizo.' },
      { es: 'Mi jefa hizo todo el trabajo.', en: 'My boss did all the work.', tip: 'Hizo = he/she did. The z spelling only appears in hizo (third person singular). All other forms use c.' },
      { es: 'decir → dije / dijo / dijeron', en: 'to say → I said / he said / they said', tip: 'TRAP: dijeron not "dijieron." When the stem ends in j, drop the i in the ellos form. Dij + eron (not dij + ieron).' },
      { es: 'Le dije que no lo hiciera.', en: 'I told him not to do it.', tip: 'Dije = I said/told. After "told someone not to" → subjunctive: hiciera (past subjunctive of hacer). Two irregulars in one sentence.' },
      { es: 'ir/ser → fui / fue / fueron', en: 'to go/be → I went/was / he went / they went', tip: 'Fui and fue work for BOTH ir and ser. Context tells you which. Fui al gym = I went. Fue difícil = it was hard. Fueron = they went/were.' },
      { es: 'tener → tuve / tuvo', en: 'to have → I had / he had', tip: 'Tuve/tuvo. Tener is completely irregular in past. Tuve que salir = I had to leave (and did). Compare: tenía que = was supposed to.' },
      { es: 'poder → pude / pudo', en: 'can/to be able → I could / he could', tip: 'Pude/pudo. No pude dormir = I couldn\'t sleep. No pudo venir = He couldn\'t come. Very common in everyday speech.' },
      { es: 'poner → puse / puso', en: 'to put → I put / he put', tip: 'Puse/puso. Me puse nervioso = I got nervous. Ponerse + emotion = to become/get. Puse la bolsa aquí = I put the bag here.' },
      { es: 'saber → supe / supo', en: 'to know → I found out / he found out', tip: 'In the past tense, saber changes meaning: supe = I found out (not just "I knew"). Supe la verdad ayer = I found out the truth yesterday.' },
      { es: 'venir → vine / vino', en: 'to come → I came / he came', tip: 'Vine/vino. Vino also means wine — same spelling. Mi amigo vino tarde = My friend came late. Vine solo = I came alone.' },
      { es: 'querer → quise / quiso', en: 'to want → I wanted / he wanted', tip: 'Quise/quiso. In past tense: quise = I tried to / wanted to. No quise ir = I didn\'t want to go (and didn\'t). Very different from quería.' },
    ]
  },
  verbs_crecer: {
    label: '📄 Crecer & Niñez Verbs',
    color: '#059669',
    items: [
      { es: 'crecer → crezco / crecí / creció', en: 'to grow up → I grow / I grew up / he grew up', tip: 'Irregular yo present: crezco (not "creco"). But past tense is regular: crecí, creciste, creció, crecimos, crecieron.' },
      { es: 'Crecí en la ciudad de Lima.', en: 'I grew up in the city of Lima.', tip: 'Crecí = I grew up. Perfect sentence to practice. Where did you grow up? Crecí en ___.' },
      { es: 'Mi padre creció en el campo.', en: 'My father grew up in the countryside.', tip: 'Creció = he/she grew up. Same regular -ER ending. El campo = the countryside (vs la ciudad = the city).' },
      { es: 'Viví en una casa pequeña, era muy cómoda.', en: 'I lived in a small house, it was very comfortable.', tip: 'Viví (preterite) for the fact, era (imperfect) for the description. This is the classic combination in storytelling.' },
      { es: 'Mi abuelo tuvo un taller de mecánica.', en: 'My grandfather had a mechanic\'s workshop.', tip: 'Tuvo = he had (preterite). The workshop existed as a completed chapter. Compare: tenía = he had it ongoing.' },
      { es: 'Me puse feliz porque fui al estadio.', en: 'I got happy because I went to the stadium.', tip: 'Ponerse = to become/get (emotion). Me puse feliz = I got happy. Me puse triste/nervioso/contento all work the same way.' },
    ]
  },
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
