const groups = [
  {
    title: 'Design',
    skills: ['Figma', 'Photoshop', 'Adobe Animate', 'Canva'],
  },
  {
    title: 'Front-end',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Back-end & Database',
    skills: ['Node.js', 'Express.js', 'PHP', 'Java', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    skills: ['Git & GitHub', 'VS Code', 'WordPress'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Skills
        </h2>
        <p className="section-desc" data-reveal>
          Tools and languages I've used in school projects and on my own.
        </p>

        <div className="skills-grid">
          {groups.map(({ title, skills }) => (
            <div key={title} className="skills-group" data-reveal>
              <h3>{title}</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
