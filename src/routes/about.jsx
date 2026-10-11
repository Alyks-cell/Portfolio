const details = [
  { label: 'School', value: 'Western Institute of Technology' },
  { label: 'Course', value: 'BS Information Technology, 3rd Year' },
  { label: 'Location', value: 'Iloilo City, Philippines' },
  { label: 'Looking for', value: '' },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-photo" data-reveal>
          <img src="/im1.jpg" alt="Alex Catequista" loading="lazy" />
        </div>

        <div className="about-text" data-reveal>
          <h2 className="section-title">About Me</h2>

          <p>
            I'm a 3rd year BSIT student who got into design because I wanted
            the apps we build in class to look and feel better to use. Since
            then I've been learning how to plan screens in Figma and build them
            with HTML, CSS, JavaScript, and React.
          </p>
          <p>
            Most of my projects started as school requirements, but I try to
            treat each one like a real product. I'm currently working on Study
            Buddy, a study tool that uses a rule-based expert system, and
            learning more about React and the MERN stack.
          </p>

          <dl className="about-details">
            {details.filter(({ value }) => value).map(({ label, value }) => (
              <div key={label} className="about-detail">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
