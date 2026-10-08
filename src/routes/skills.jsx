import React from 'react'
import {
  FaPenRuler, FaImage, FaFilm, FaPalette, FaCode,
  FaDatabase, FaLaptopCode, FaServer, FaCodeBranch,
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

const Skills = () => {
  return (
    <section id="skills" className="section skills">

      {/* HEADER */}
      <div className="section-header" data-reveal>
        <p className="section-label"><span>02</span> Skills</p>
        <h2 className="section-heading">What I <em>work with</em></h2>
        <p className="section-sub">
          What I design in, and what I build with.
        </p>
      </div>

      {/* GROUPS */}
      <div className="skills-groups">
        {groups.map((group) => (
          <div key={group.title} className="skills-group" data-reveal>
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid">
              {group.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name} className="skill-card">
                    <Icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills
