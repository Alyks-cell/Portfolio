const projects = [
  {
    title: 'Pixi',
    type: 'Educational Game (Prototype)',
    description:
      'A quiz game prototype that helps students review lessons. I designed the quiz screens and the reward system in Figma and linked them into a clickable prototype.',
    tags: ['Figma', 'UI Design', 'Prototyping'],
    image: '/pixi.png',
    link: 'https://www.figma.com/proto/B97MkEkFZbnAQSWqph8zsT/PIXELITES?node-id=954-298&starting-point-node-id=954%3A307',
    linkLabel: 'View Prototype',
  },
  {
    title: 'Hulab',
    type: 'Inventory System',
    description:
      'An inventory system for keeping track of laboratory items. I designed the screens in Figma and built the app using the MERN stack so item records and stock information are kept in one place.',
    tags: ['Figma', 'MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/hulab.png',
    link: 'https://www.figma.com/proto/vVSXfrgRsE9sPKs2laiqWP/HULAB?node-id=601-227&p=f&t=dWhyth6hWgxQ818V-0&scaling=scale-down&content-scaling=fixed&page-id=601%3A226&starting-point-node-id=601%3A227',
    linkLabel: 'View Prototype',
  },
  {
    title: 'Todo App',
    type: 'Web App',
    description:
      'A simple full-stack to-do list where you can add, edit, complete, and delete tasks. It is a basic CRUD app with a MongoDB database.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/app1.png',
    link: 'https://github.com/Alyks-cell/awesometodosapp',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'School Uniform Exchange',
    type: 'Group Project · Web App',
    description:
      'A marketplace where students can sell or swap used school uniforms. We built it as a group, and it has item listings plus a real-time chat so students can arrange the exchange.',
    tags: ['MERN', 'Socket.io'],
    link: 'https://github.com/keltrixx/ProjectV1',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Study Buddy',
    type: 'Expert System · In Progress',
    description:
      'A study helper that asks students a few questions about how they study, then uses a set of rules to suggest a study method that fits them.',
    tags: ['Expert System', 'Rule-based Logic'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Projects
        </h2>
        <p className="section-desc" data-reveal>
          Some of the things I've worked on, both individual and group
          projects.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${index === 0 ? 'project-card--featured' : ''}`}
              data-reveal
            >
              <div className="project-img">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                  />
                ) : (
                  <span className="project-img-empty" aria-hidden="true">
                    {project.title}
                  </span>
                )}
              </div>

              <div className="project-body">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
