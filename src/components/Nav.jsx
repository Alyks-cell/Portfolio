import { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar-logo" onClick={() => setOpen(false)}>
        <span className="navbar-title">Alex Catequista</span>
      </a>

      <button
        className="navbar-toggle"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <HiXMark /> : <HiBars3 />}
      </button>

      <nav className={`navbar-links ${open ? 'navbar-links--open' : ''}`}>
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-link ${active === id ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
