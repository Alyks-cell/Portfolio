import React from 'react'

const projects = [
  {
    title: 'Todo App',
    desc: 'A full stack web application using the MERN Stack with full CRUD functionality.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    img: '/app1.png',
  },
  {
    title: 'Pixi',
    desc: 'A Figma prototype for an educational game that makes reviewing fun.',
    tags: ['Figma'],
    img: '/pixi.png',
  },
  {
    title: 'Hulab',
    desc: 'A full stack inventory management system built with the MERN Stack.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    img: '/hulab.png',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <p className="projects-label">What I've built</p>
        <h2 className="projects-heading">My Projects</h2>
        <p className="projects-subtext">
          A selection of projects I've worked on.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects