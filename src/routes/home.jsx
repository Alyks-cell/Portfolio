const skills = [
  'React.js',
  'Tailwind CSS',
  'JavaScript',
  'Node.js',
  'Git & GitHub',
  'UI Design',
  'REST APIs',
  'Figma',
  'Photoshop',
  'Java',
]

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-badge">
          <span className="home-badge-dot" />
          BSIT Student · Western Institute of Technology
        </p>

        <h1 className="home-name">
          Alex Catequista
          <span className="home-name-accent">UI/UX designer</span>
        </h1>

        <p className="home-intro">
          I design interfaces and build them in code. Currently a BSIT student,
          looking for internships in UI/UX and front-end work.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn btn--primary">
            See my work
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="home-portrait">
        <img src="/asd.jpe" alt="Portrait of Alex Catequista" />
      </div>

      <div className="home-cards" aria-hidden="true">
        <div className="home-cards-track">
          {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="home-card">
              <span
                className={`home-card-dot ${index % 2 ? 'home-card-dot--blue' : ''}`}
              />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
