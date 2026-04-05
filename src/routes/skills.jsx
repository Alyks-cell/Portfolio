import React from 'react'

const skills = [
  { name: 'HTML', emoji: '🌐' },
  { name: 'CSS', emoji: '🎨' },
  { name: 'JavaScript', emoji: '⚡' },
  { name: 'PHP', emoji: '🐘' },
  { name: 'Java', emoji: '☕' },
  { name: 'SQL', emoji: '🗄️' },
  { name: 'Figma', emoji: '✏️' },
  { name: 'Adobe Animate', emoji: '🎬' },
  { name: 'Photoshop', emoji: '🖼️' },
  { name: 'Canva', emoji: '🖌️' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'WordPress', emoji: '📝' },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">

      {/* HEADER */}
      <div className="skills-header">
        <p className="skills-label">What I work with</p>
        <h2 className="skills-heading">My Skills</h2>
        <p className="skills-subtext">
          Tools and technologies I use to bring ideas to life.
        </p>
      </div>

      {/* GRID */}
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <span className="skill-emoji">{skill.emoji}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills