import React from 'react'

const facts = [
  { label: 'Studying', value: 'BS Information Technology, 2nd year' },
  { label: 'School', value: 'Western Institute of Technology' },
  { label: 'Focus', value: 'UI/UX design & web development' },
]

const About = () => {
  return (
    <section id="about" className="section about">

      {/* TEXT */}
      <div className="about-text" data-reveal>
        <p className="section-label"><span>01</span> About</p>
        <h2 className="section-heading">
          A little <em>about me</em>
        </h2>

        <p className="about-subtext">
          I’m a second-year BSIT student at Western Institute of Technology
          who enjoys turning ideas into creative digital projects.
          I’m always eager to learn new skills and improve in IT and design.
        </p>

        <dl className="about-facts">
          {facts.map((fact) => (
            <div key={fact.label} className="about-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* IMAGE STACK */}
      <div className="about-img-wrapper" data-reveal>
        <img src="im1.jpg" alt="" className="about-img back-img2" loading="lazy" />
        <img src="im2.jpg" alt="" className="about-img back-img1" loading="lazy" />
        <img src="image.jpg" alt="Portrait of Alex" className="about-img main-img" loading="lazy" />
      </div>

    </section>
  )
}

export default About
