import { useEffect } from 'react'
import Navbar from './components/Nav'
import Home from './routes/home'
import About from './routes/about'
import Skills from './routes/skills'
import Projects from './routes/projects'
import Contact from './routes/contact'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
