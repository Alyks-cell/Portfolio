function seeded(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

const random = seeded(27)
const dots = Array.from({ length: 34 }, () => ({
  x: Math.round(random() * 1200),
  y: Math.round(random() * 600),
  r: (random() * 1.4 + 0.6).toFixed(1),
  delay: (random() * 6).toFixed(2),
}))

const dipper = [
  [10, 75],
  [95, 37],
  [180, 53],
  [260, 10],
  [342, 45],
  [380, 130],
  [278, 145],
]

const dipperPath =
  `M${dipper.map(([x, y]) => `${x} ${y}`).join(' L')} L${dipper[3].join(' ')}`

const sparkle =
  'M0 -7 C1 -1 1 -1 7 0 C1 1 1 1 0 7 C-1 1 -1 1 -7 0 C-1 -1 -1 -1 0 -7Z'

function StarrySky() {
  return (
    <svg
      className="sky"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="shooting-star" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {dots.map(({ x, y, r, delay }) => (
        <circle
          key={`${x}-${y}`}
          className="sky-dot"
          cx={x}
          cy={y}
          r={r}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      <g className="sky-shooting">
        <line x1="90" y1="-34" x2="0" y2="0" stroke="url(#shooting-star)" />
      </g>
    </svg>
  )
}

export function Constellation() {
  return (
    <svg className="constellation" viewBox="-10 -10 410 175" aria-hidden="true">
      <path className="sky-line" d={dipperPath} pathLength="1" />

      {dipper.map(([x, y], index) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
          <path
            className="sky-star"
            d={sparkle}
            style={{ animationDelay: `${index * 0.6}s` }}
          />
        </g>
      ))}
    </svg>
  )
}

const randomHero = seeded(11)
const heroDots = Array.from({ length: 60 }, () => ({
  x: Math.round(randomHero() * 1440),
  y: Math.round(randomHero() * 760),
  r: (randomHero() * 1.5 + 0.7).toFixed(1),
  delay: (randomHero() * 6).toFixed(2),
}))

const heroSparkles = [
  { x: 120, y: 90, scale: 0.6, delay: 0.4 },
  { x: 640, y: 60, scale: 0.7, delay: 1.6 },
  { x: 1380, y: 420, scale: 0.6, delay: 2.4 },
  { x: 760, y: 700, scale: 0.5, delay: 3.1 },
  { x: 60, y: 640, scale: 0.5, delay: 1.1 },
  { x: 1240, y: 690, scale: 0.55, delay: 2.8 },
]

export function HeroSky() {
  return (
    <svg
      className="sky hero-sky"
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-shooting-star" x1="0" x2="1">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {heroDots.map(({ x, y, r, delay }) => (
        <circle
          key={`${x}-${y}`}
          className="sky-dot"
          cx={x}
          cy={y}
          r={r}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}

      {heroSparkles.map(({ x, y, scale, delay }) => (
        <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(${scale})`}>
          <path
            className="sky-star"
            d={sparkle}
            style={{ animationDelay: `${delay}s` }}
          />
        </g>
      ))}

      <g transform="translate(408 256) scale(1.6)">
        <path
          className="sky-line"
          d={dipperPath}
          pathLength="1"
          vectorEffect="non-scaling-stroke"
        />
        {dipper.map(([x, y], index) => (
          <g key={`${x}-${y}`} transform={`translate(${x} ${y}) scale(0.8)`}>
            <path
              className="sky-star"
              d={sparkle}
              style={{ animationDelay: `${index * 0.6}s` }}
            />
          </g>
        ))}
      </g>

      <g className="hero-shooting">
        <line x1="90" y1="-34" x2="0" y2="0" stroke="url(#hero-shooting-star)" />
      </g>
      <g className="hero-shooting hero-shooting--late">
        <line x1="90" y1="-34" x2="0" y2="0" stroke="url(#hero-shooting-star)" />
      </g>
    </svg>
  )
}

export default StarrySky
