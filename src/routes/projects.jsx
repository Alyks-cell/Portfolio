import { HiArrowUpRight } from 'react-icons/hi2'

const projects = [
  {
    title: 'Study Buddy',
    type: 'Study tool · Expert system',
    description:
      'I built a working study tool around expert-system logic I developed. It applies a set of rules to learner responses and returns a study recommendation, putting the decision logic at the heart of the project.',
    tags: ['Expert system', 'Rule-based logic'],
    link: 'mailto:btsxtxt27@gmail.com?subject=Study%20Buddy%20project',
    linkLabel: 'Ask me about Study Buddy',
  },
  {
    title: 'Pixi',
    type: 'Educational game · Prototype',
    description:
      'Students need a more engaging way to review. I designed the quiz and reward flow in Figma, then connected the screens into a playable-feeling prototype for an educational game.',
    tags: ['Figma', 'Prototyping'],
    image: '/pixi.png',
    link: 'https://www.figma.com/proto/B97MkEkFZbnAQSWqph8zsT/PIXELITES?node-id=954-298&starting-point-node-id=954%3A307',
    linkLabel: 'View prototype',
  },
  {
    title: 'Hulab',
    type: 'Inventory management · Web app',
    description:
      'Lab inventory is easier to manage when stock information is in one place. I built a MERN inventory app to organize item records and make the core tracking workflow accessible through a web interface.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/hulab.png',
    link: 'https://www.figma.com/proto/vVSXfrgRsE9sPKs2laiqWP/HULAB?node-id=601-227&p=f&t=dWhyth6hWgxQ818V-0&scaling=scale-down&content-scaling=fixed&page-id=601%3A226&starting-point-node-id=601%3A227',
    linkLabel: 'View prototype',
  },
  {
    title: 'Todo App',
    type: 'Task management · Web app',
    description:
      'I wanted a straightforward place to manage everyday tasks, so I built a full-stack MERN app with create, edit, complete, and delete flows. The result is a working CRUD app backed by MongoDB.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    image: '/app1.png',
    link: 'https://github.com/Alyks-cell/awesometodosapp',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'School Uniform Exchange Platform',
    type: 'Student marketplace · Web app',
    description:
      'Students need a practical way to find, sell, or swap school uniforms. I contributed to a responsive marketplace that brings listings and real-time chat together, so students can coordinate an exchange in one place.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    link: 'https://github.com/keltrixx/ProjectV1',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'Teech',
    type: 'In progress',
    description:
      'A project in progress. More details will be added as the work takes shape.',
    tags: [],
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-header" data-reveal>
        <p className="section-label">
          <span>03</span> Projects
        </p>
        <h2 className="section-heading">
          Things I've <em>built</em>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const Card = project.link ? 'a' : 'article'
          const external = project.link?.startsWith('http')

          return (
            <Card
              key={project.title}
              className={`project-card ${project.link ? 'project-card--link' : ''}`}
              data-reveal
              {...(project.link && { href: project.link })}
              {...(external && { target: '_blank', rel: 'noreferrer' })}
              aria-label={
                project.link
                  ? `${project.title} - ${project.linkLabel}`
                  : undefined
              }
            >
              <div className="project-img-wrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="project-img"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="project-img project-img--placeholder"
                    aria-hidden="true"
                  >
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {project.tags.length > 0 && (
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag} className="project-tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {project.link ? (
                  <span className="project-link">
                    {project.linkLabel}
                    <HiArrowUpRight aria-hidden="true" />
                  </span>
                ) : (
                  <span className="project-link project-link--disabled">
                    In progress
                  </span>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
