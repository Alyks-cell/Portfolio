import { createElement } from 'react'
import {
  FaCode,
  FaCodeBranch,
  FaDatabase,
  FaFilm,
  FaImage,
  FaLaptopCode,
  FaPalette,
  FaPenRuler,
  FaServer,
} from 'react-icons/fa6'

const groups = [
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: FaPenRuler },
      { name: 'Photoshop', icon: FaImage },
      { name: 'Adobe Animate', icon: FaFilm },
      { name: 'Canva', icon: FaPalette },
    ],
  },
  {
    title: 'Development & tools',
    skills: [
      { name: 'HTML', icon: FaCode },
      { name: 'CSS', icon: FaCode },
      { name: 'JavaScript', icon: FaCode },
      { name: 'PHP', icon: FaServer },
      { name: 'Java', icon: FaLaptopCode },
      { name: 'SQL', icon: FaDatabase },
      { name: 'WordPress', icon: FaLaptopCode },
      { name: 'GitHub', icon: FaCodeBranch },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-header" data-reveal>
        <p className="section-label">
          <span>02</span> Skills
        </p>
        <h2 className="section-heading">
          What I <em>work with</em>
        </h2>
        <p className="section-sub">
          What I design in, and what I build with.
        </p>
      </div>

      <div className="skills-groups">
        {groups.map(({ title, skills: groupSkills }) => (
          <div key={title} className="skills-group" data-reveal>
            <h3 className="skills-group-title">{title}</h3>
            <div className="skills-grid">
              {groupSkills.map(({ name, icon }) => (
                <div key={name} className="skill-card">
                  {createElement(icon, {
                    className: 'skill-icon',
                    'aria-hidden': true,
                  })}
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
