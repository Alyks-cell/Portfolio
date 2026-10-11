import { BsEnvelope, BsGeoAlt, BsGithub } from 'react-icons/bs'
import StatusBar from '../components/StatusBar'
import { HeroSky } from '../components/StarrySky'
import { email, github } from '../links'

function handleTilt(event) {
  const box = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - box.left) / box.width - 0.5
  const y = (event.clientY - box.top) / box.height - 0.5

  event.currentTarget.style.setProperty('--x', x.toFixed(3))
  event.currentTarget.style.setProperty('--y', y.toFixed(3))
}

function resetTilt(event) {
  event.currentTarget.style.setProperty('--x', 0)
  event.currentTarget.style.setProperty('--y', 0)
}

function Home() {
  return (
    <section id="home" className="home">
      <HeroSky />
      <div className="home-content">
        <h1 className="home-name">
          Hi, I'm <span>Alex Catequista</span>
        </h1>

        <p className="home-intro">
          I'm an IT student at Western Institute of Technology. I enjoy
          designing user interfaces in Figma and turning them into working
          websites. Right now I'm focusing on UI/UX design and front-end
          development with React.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            Contact Me
          </a>
        </div>

        <ul className="home-meta">
          <li>
            <BsGeoAlt aria-hidden="true" /> Iloilo City, Philippines
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              <BsGithub aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${email}`}>
              <BsEnvelope aria-hidden="true" /> Email
            </a>
          </li>
        </ul>
      </div>

      <div
        className="home-photo"
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
      >
        <img src="/asd.jpe" alt="Alex Catequista" />
        <span className="home-photo-hi" aria-hidden="true">
          Hi there! <span className="wave">👋</span>
        </span>
      </div>

      <StatusBar />
    </section>
  )
}

export default Home
