import { createElement, useEffect, useRef, useState } from 'react'
import {
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2'

const links = [
  { id: 'home', label: 'Home', icon: HiOutlineHome },
  { id: 'about', label: 'About', icon: HiOutlineUser },
  { id: 'skills', label: 'Skills', icon: HiOutlineWrenchScrewdriver },
  { id: 'projects', label: 'Projects', icon: HiOutlineFolder },
  { id: 'certificates', label: 'Certificates', short: 'Certs', icon: HiOutlineAcademicCap },
  { id: 'contact', label: 'Contact', icon: HiOutlineChatBubbleLeftRight },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const headerRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      headerRef.current?.style.setProperty('--progress', progress.toFixed(4))

      const middle = window.innerHeight / 2
      let current = links[0].id
      links.forEach(({ id }) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top !== undefined && top <= middle) current = id
      })
      if (max > 0 && window.scrollY >= max - 2) current = links[links.length - 1].id

      setActive(current)
    }

    const frame = requestAnimationFrame(update)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
      <header className="navbar" ref={headerRef}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">
            Alex Catequista
          </a>

          <nav className="navbar-tabs" aria-label="Main">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-tab ${active === id ? 'active' : ''}`}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <span className="navbar-progress" aria-hidden="true" />
      </header>

      <nav className="bottom-nav" aria-label="Main">
        {links.map(({ id, label, short, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`bottom-nav-link ${active === id ? 'active' : ''}`}
            aria-current={active === id ? 'true' : undefined}
          >
            <span className="bottom-nav-icon">
              {createElement(icon, { 'aria-hidden': true })}
            </span>
            {short ?? label}
          </a>
        ))}
      </nav>
    </>
  )
}

export default Navbar
