import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

const projects = [
  {
    title: 'Todo App',
    type: 'Web App',
    desc: 'A full stack web application using the MERN Stack with full CRUD functionality.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    img: '/app1.png',
    link: 'https://github.com/Alyks-cell/awesometodosapp',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Pixi',
    type: 'Prototype',
    desc: 'A Figma prototype for an educational game that makes reviewing fun.',
    tags: ['Figma'],
    img: '/pixi.png',
    link: 'https://www.figma.com/proto/B97MkEkFZbnAQSWqph8zsT/PIXELITES?node-id=954-298&starting-point-node-id=954%3A307',
    linkLabel: 'View prototype',
  },
  {
    title: 'Hulab',
    type: 'Web App',
    desc: 'A full stack inventory management system built with the MERN Stack.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    img: '/hulab.png',
    link: 'https://www.figma.com/proto/vVSXfrgRsE9sPKs2laiqWP/HULAB?node-id=601-227&p=f&t=dWhyth6hWgxQ818V-0&scaling=scale-down&content-scaling=fixed&page-id=601%3A226&starting-point-node-id=601%3A227',
    linkLabel: 'View prototype',
  },
  {
    title: 'School Uniform Exchange Platform',
    type: 'Web App',
    desc: 'A responsive marketplace where students buy, sell, and swap school uniforms, with real-time chat.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    link: 'https://github.com/keltrixx/ProjectV1',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Teech',
    type: 'In progress',
    desc: 'A new project currently in the works. Details coming soon.',
    tags: [],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="section-header" data-reveal>
        <p className="section-label"><span>03</span> Projects</p>
        <h2 className="section-heading">Things I've <em>built</em></h2>
        <p className="section-sub">
          A selection of projects I've worked on.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card" data-reveal>
            <div className="project-img-wrapper">
              {project.img ? (
                <img src={project.img} alt={`${project.title} preview`} className="project-img" loading="lazy" />
              ) : (
                <div className="project-img project-img--placeholder" aria-hidden="true">
                  {project.title.charAt(0)}
                </div>
              )}
            </div>
            <div className="project-info">
              <p className="project-type">{project.type}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              {project.tags.length > 0 && (
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="project-tag">{tag}</li>
                  ))}
                </ul>
              )}
              {project.link ? (
                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                  {project.linkLabel} <HiArrowUpRight />
                </a>
              ) : (
                <span className="project-link project-link--disabled">Link coming soon</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
