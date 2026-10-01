import React from 'react'
import {
  SiHtml5, SiCss, SiJavascript, SiPhp, SiFigma, SiCanva, SiGithub, SiWordpress,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { TbBrandAdobePhotoshop, TbBrandAdobe, TbSql } from 'react-icons/tb'

const groups = [
  {
    title: 'Design',
    skills: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Photoshop', icon: TbBrandAdobePhotoshop },
      { name: 'Adobe Animate', icon: TbBrandAdobe },
      { name: 'Canva', icon: SiCanva },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'PHP', icon: SiPhp },
      { name: 'Java', icon: FaJava },
      { name: 'SQL', icon: TbSql },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', icon: SiGithub },
      { name: 'WordPress', icon: SiWordpress },
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
          Tools and technologies I use to bring ideas to life.
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
