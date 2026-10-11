import { useEffect, useRef, useState } from 'react'

const SIZE = 48

const palette = {
  o: '#1d1d26',
  a: '#2b2b35',
  e: '#3b3b47',
  b: '#fbfaf6',
  d: '#d9d8e0',
  l: '#ffffff',
  c: '#f2efe6',
  p: '#f5a3b5',
  k: '#0f0f14',
  n: '#1d1d26',
  w: '#ffffff',
  y: '#ffd35a',
}

const head = [
  '..ooo......ooo..',
  '.oaaao....oaaao.',
  '.oaaaooooooaaao.',
  '.obllbbbbbbbbbo.',
  'obbbbbbyybbbbbbo',
  'obbbbbyyyybbbbbo',
]

const eyes = {
  open: ['obekwebbbbekwebo', 'obekkebbbbekkebo'],
  closed: ['obeeeebbbbeeeebo', 'obeeeebbbbeeeebo'],
  happy: ['obewwebbbbewwebo', 'obweewbbbbweewbo'],
}

const body = [
  'obppbccnnccbppbo',
  '.obbbccccccbbdo.',
  '..oobbbbbbbboo..',
  '..oaaaccccaaao..',
  '.oaaaccyyccaaao.',
  '..obbccccccbdo..',
]

const feet = [
  ['..oaao....oaao..', '..ooo......ooo..'],
  ['...oaao..oaao...', '...ooo...ooo....'],
]

const phrases = [
  'Ursi!',
  'Ursi ursi!',
  '*happy panda noises*',
  "I'm made of stars ✦",
  'Hoy! Hey!',
  'Hi Sir! Hi Maam!',
  'Soooo Tireddddd',
]

const SLEEP_AFTER = 10000

const perches = [
  { section: 'home', selector: '.status-bar', side: 'left', say: 'Hi there!' },
  { section: 'about', selector: '.about-details', side: 'right', say: "that's my human!" },
  { section: 'skills', selector: '.skills-group', side: 'right', say: 'so many skills ✦' },
  { section: 'projects', selector: '.project-card', side: 'right', say: 'ooh, projects!' },
  { section: 'certificates', selector: '.cert-filters, .cert-timeline', side: 'right', say: 'my human is certified ✦' },
  { section: 'contact', selector: '.contact-links', side: 'right', say: 'say hi to my human!' },
]

const startState = {
  x: 24,
  y: 0,
  dir: 1,
  mood: 'idle',
  until: 0,
  walked: 0,
  blink: false,
  placed: false,
  away: true,
}

const random = (min, max) => min + Math.random() * (max - min)

const bottomSpace = () => (window.innerWidth <= 700 ? 76 : 8)

function clampToScreen(x, y) {

  return {
    x: Math.min(Math.max(x, 4), window.innerWidth - SIZE - 4),
    y: Math.min(Math.max(y, 4), window.innerHeight - SIZE - bottomSpace()),
  }
}

function findPerch() {
  const middle = window.innerHeight / 2
  let perch = perches[0]

  perches.forEach((item) => {
    const box = document.getElementById(item.section)?.getBoundingClientRect()
    if (box && box.top <= middle) perch = item
  })

  const box = document.querySelector(perch.selector)?.getBoundingClientRect()
  if (!box) return null

  const y = box.top - SIZE + 3

  return {
    section: perch.section,
    say: perch.say,
    x: perch.side === 'left' ? box.left + 40 : box.right - SIZE - 32,
    y,
    onScreen: y >= 0 && y + SIZE <= window.innerHeight - bottomSpace(),
  }
}

function Sprite({ rows }) {
  const rects = []

  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const char = row[x]
      let width = 1
      while (row[x + width] === char) width += 1

      if (char !== '.') {
        rects.push(
          <rect
            key={`${x}-${y}`}
            className={char === 'y' ? 'pet-star' : undefined}
            x={x}
            y={y}
            width={width}
            height={1}
            fill={palette[char]}
          />,
        )
      }
      x += width
    }
  })

  return (
    <svg
      viewBox="0 0 16 16"
      width={SIZE}
      height={SIZE}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rects}
    </svg>
  )
}

function Pet() {
  const simRef = useRef(startState)
  const dragRef = useRef(null)
  const justDraggedRef = useRef(false)
  const pauseUntilRef = useRef(0)
  const lastActiveRef = useRef(0)
  const sectionRef = useRef(null)
  const attachedRef = useRef(false)
  const sayRef = useRef(null)
  const nextBlinkRef = useRef(0)
  const blinkUntilRef = useRef(0)
  const bubbleTimerRef = useRef(null)
  const [view, setView] = useState(startState)
  const [bubble, setBubble] = useState(null)
  const [particles, setParticles] = useState([])

  const update = (changes) => {
    simRef.current = { ...simRef.current, ...changes }
    setView(simRef.current)
  }

  const showBubble = (text, duration = 1800) => {
    clearTimeout(bubbleTimerRef.current)
    setBubble(text)
    bubbleTimerRef.current = setTimeout(() => setBubble(null), duration)
  }

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame
    let lastTime = performance.now()

    const loop = (time) => {
      const delta = Math.max(0, Math.min(time - lastTime, 50))
      lastTime = time

      const now = Date.now()
      const previous = simRef.current
      let state = previous
      const perch = findPerch()

      if (perch && !state.placed) {
        state = { ...state, ...clampToScreen(perch.x, perch.y), placed: true }
      }

      if (perch && perch.section !== sectionRef.current) {
        sectionRef.current = perch.section
        attachedRef.current = false
        sayRef.current = perch.say
        lastActiveRef.current = now
      }

      const goal = perch ? clampToScreen(perch.x, perch.y) : null
      const dx = goal ? goal.x - state.x : 0
      const dy = goal ? goal.y - state.y : 0
      const distance = Math.hypot(dx, dy)
      const resting = now - lastActiveRef.current > SLEEP_AFTER ? 'sleep' : 'idle'

      const away = perch && !perch.onScreen && !dragRef.current?.moved

      if (dragRef.current?.moved) {
        state = { ...state, mood: 'held' }
      } else if (away) {
        attachedRef.current = true
        state = { ...state, ...goal, mood: resting }
      } else if (state.mood === 'happy' && now < state.until) {
        state = { ...state, mood: 'happy' }
      } else if (!goal || now < pauseUntilRef.current) {
        state = { ...state, mood: resting }
      } else if (attachedRef.current) {
        state = { ...state, ...goal, mood: resting }
        if (sayRef.current) {
          showBubble(sayRef.current)
          sayRef.current = null
        }
      } else {
        const step = Math.max(0.14, distance / 700) * delta

        if (reduceMotion || step >= distance) {
          attachedRef.current = true
          state = { ...state, ...goal, mood: 'idle' }
          if (sayRef.current) {
            showBubble(sayRef.current)
            sayRef.current = null
          }
        } else {
          state = {
            ...state,
            x: state.x + (dx / distance) * step,
            y: state.y + (dy / distance) * step,
            dir: Math.abs(dx) > 2 ? Math.sign(dx) : state.dir,
            mood: 'walk',
            walked: state.walked + delta,
          }
        }
      }

      if (now > nextBlinkRef.current) {
        blinkUntilRef.current = now + 130
        nextBlinkRef.current = now + random(2500, 5000)
      }
      state = {
        ...state,
        ...clampToScreen(state.x, state.y),
        blink: now < blinkUntilRef.current,
        away: Boolean(away),
      }

      simRef.current = state
      const changed = ['x', 'y', 'dir', 'mood', 'blink', 'placed', 'away'].some(
        (key) => state[key] !== previous[key],
      )
      if (changed) setView(state)

      frame = requestAnimationFrame(loop)
    }

    frame = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frame)
  }, [])

  const celebrate = () => {
    const now = Date.now()
    lastActiveRef.current = now
    update({ mood: 'happy', until: now + 1400 })
    showBubble(phrases[Math.floor(Math.random() * phrases.length)])

    const burst = Array.from({ length: 6 }, (_, index) => ({
      id: `${now}-${index}`,
      char: index % 2 ? '♥' : '✦',
      dx: Math.round(random(-26, 26)),
      delay: index * 60,
    }))
    setParticles((current) => [...current, ...burst])
    setTimeout(() => {
      setParticles((current) => current.filter((item) => !burst.includes(item)))
    }, 1300)
  }

  const handlePointerDown = (event) => {
    if (event.button !== 0) return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      offsetX: event.clientX - simRef.current.x,
      offsetY: event.clientY - simRef.current.y,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    }
  }

  const handlePointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return

    const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY)
    if (!drag.moved && distance < 5) return

    if (!drag.moved) {
      drag.moved = true
      showBubble('Wheee!', 60000)
    }
    update({
      ...clampToScreen(event.clientX - drag.offsetX, event.clientY - drag.offsetY),
      mood: 'held',
    })
  }

  const handlePointerUp = () => {
    const drag = dragRef.current
    dragRef.current = null
    if (!drag?.moved) return

    const now = Date.now()
    justDraggedRef.current = true
    attachedRef.current = false
    lastActiveRef.current = now
    pauseUntilRef.current = now + 4000
    update({ mood: 'idle' })
    showBubble('again! again!', 1200)
  }

  const handleClick = () => {
    if (justDraggedRef.current) {
      justDraggedRef.current = false
      return
    }
    celebrate()
  }

  let face = eyes.open
  if (view.mood === 'happy' || view.mood === 'held') face = eyes.happy
  else if (view.mood === 'sleep' || view.blink) face = eyes.closed

  const legs = view.mood === 'walk' ? feet[Math.abs(Math.floor(view.walked / 150)) % 2] : feet[0]
  const rows = [...head, ...face, ...body, ...legs]

  return (
    <div className="pet-layer">
      <button
        type="button"
        className={`pet pet--${view.mood} ${view.away ? 'pet--away' : ''}`}
        style={{
          transform: `translate(${view.x}px, ${view.y}px)`,
          visibility: view.placed ? 'visible' : 'hidden',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={handleClick}
        aria-label="Ursi the star panda. Click to say hi"
      >
        <span className="pet-name">Ursi</span>

        {bubble && <span className="pet-bubble">{bubble}</span>}
        {view.mood === 'sleep' && (
          <span className="pet-zzz" aria-hidden="true">
            z<span>z</span>
          </span>
        )}

        {particles.map(({ id, char, dx, delay }) => (
          <span
            key={id}
            className="pet-particle"
            style={{ '--dx': `${dx}px`, animationDelay: `${delay}ms` }}
            aria-hidden="true"
          >
            {char}
          </span>
        ))}

        <span className="pet-body" style={{ '--dir': view.dir }}>
          <Sprite rows={rows} />
        </span>
        <span className="pet-shadow" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Pet
