import React, { useEffect, useRef } from 'react'
import { HiArrowDown } from 'react-icons/hi2'

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
      const { left, top } = hero.getBoundingClientRect()
      hero.style.setProperty('--glow-x', `${e.clientX - left}px`)
      hero.style.setProperty('--glow-y', `${e.clientY - top}px`)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="home" ref={heroRef}>

      {/* effects */}
      <div className="home-grid" />
      <div className="home-cursor-glow" />
      <div className="home-orb home-orb--deep" />
      <div className="home-orb home-orb--blue" />

      {/* content */}
      <div className="home-content">
        <p className="home-badge">
          <span className="home-badge-dot" />
          BSIT Student · Western Institute of Technology
        </p>

        <h1 className="home-name">
          Hi, I'm Alex.
          <span className="home-name-accent">UI/UX designer in progress.</span>
        </h1>

        <p className="home-intro">
          I turn ideas into creative digital projects, from Figma prototypes
          to full-stack web apps.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn btn--primary">See my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      {/* cards */}
      <div className="home-cards" aria-hidden="true">
        <div className="home-cards-track">
          {[...skills, ...skills].map((item, i) => (
            <div key={i} className="home-card">
              <span className={`home-card-dot ${i % 2 ? 'home-card-dot--blue' : ''}`} />
              {item}
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="home-scroll" aria-label="Scroll to about">
        <HiArrowDown />
      </a>

    </section>
  )
}

export default Home
