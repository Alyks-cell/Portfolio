import React, { useEffect, useRef } from 'react'

const skills = [
  'React.js', 'Tailwind CSS', 'JavaScript', 'Node.js',
  'Git & GitHub', 'UI Design', 'REST APIs', 'Figma',
  'Photoshop', 'Java'
]

const Home = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current

    const handleMouseMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      hero.style.setProperty('--glow-x', `${x}px`)
      hero.style.setProperty('--glow-y', `${y}px`)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="home" ref={heroRef}>
      
      {/* effects */}
      <div className="home-cursor-glow" />
      <div className="home-orb home-orb--purple" />
      <div className="home-orb home-orb--blue" />

      {/* content */}
      <h1 className="home-name">
        Alex's Portfolio
        <span className="home-name-dim">
          Learn more about me <br /> and the skills I'm building.
        </span>
      </h1>

      <p className="home-subtext">WELCOME!</p>

      <div className="home-buttons">
        <a href="#about" className="home-btn home-btn--primary">Explore →</a>
        <a href="#contact" className="home-btn home-btn--ghost">Contact</a>
      </div>

      <p className="home-footnote">✦ Western Institute of Technology ✦</p>

      {/* cards */}
      <div className="home-cards">
        <div className="home-cards-track">
          {[...skills, ...skills].map((item, i) => (
            <div key={i} className="home-card">
              <span className="home-card-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="home-cards mt-2">
        <div className="home-cards-track home-cards-track--reverse">
          {[...skills, ...skills].map((item, i) => (
            <div key={i} className="home-card">
              <span className="home-card-dot home-card-dot--blue" />
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Home