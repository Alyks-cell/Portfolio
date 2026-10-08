const facts = [
  { label: 'Currently', value: 'Building Study Buddy; learning React' },
  { label: 'Tools', value: 'Figma, React, Tailwind CSS' },
  { label: 'Based in', value: 'Iloilo, Philippines' },
  { label: 'Open to', value: 'Internships and freelance work' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="about-text" data-reveal>
        <p className="section-label">
          <span>01</span> About
        </p>
        <h2 className="section-heading">
          A little <em>about me</em>
        </h2>

        <p className="about-subtext">
          I like figuring out how an interface can make a task feel simpler,
          then bringing that idea from Figma into code. I'm currently building
          Study Buddy and developing my skills. I'm looking for work where I can
          contribute to useful digital products and learn from a team.
        </p>

        <dl className="about-facts">
          {facts.map(({ label, value }) => (
            <div key={label} className="about-fact">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="about-img-wrapper" data-reveal>
        <img
          src="/im1.jpg"
          alt=""
          className="about-img back-img2"
          loading="lazy"
        />
        <img
          src="/im2.jpg"
          alt=""
          className="about-img back-img1"
          loading="lazy"
        />
        <img
          src="/asd.jpe"
          alt="Portrait of Alex Catequista"
          className="about-img main-img"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default About
