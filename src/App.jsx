import { useEffect } from 'react'
import Navbar from './components/Nav';
import Home from './routes/home';
import About from './routes/about'
import Skills from './routes/skills'
import Project from './routes/project'
import Contact from './routes/contact';

function App() {
  // Fade elements marked with data-reveal in as they scroll into view
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
      { threshold: 0.15 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
