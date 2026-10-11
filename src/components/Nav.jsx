import { createElement, useEffect, useRef, useState } from 'react'
import {
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
  { id: 'contact', label: 'Contact', icon: HiOutlineChatBubbleLeftRight },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    links.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      headerRef.current?.style.setProperty('--progress', progress.toFixed(4))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
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
        {links.map(({ id, label, icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`bottom-nav-link ${active === id ? 'active' : ''}`}
            aria-current={active === id ? 'true' : undefined}
          >
            <span className="bottom-nav-icon">
              {createElement(icon, { 'aria-hidden': true })}
            </span>
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}

export default Navbar
