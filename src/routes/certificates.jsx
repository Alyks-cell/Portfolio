import { useEffect, useState } from 'react'
import { HiArrowUpRight, HiXMark } from 'react-icons/hi2'

const items = [
  {
    year: '2025',
    type: 'Certificate',
    title: 'Certificate of Participation',
    from: 'Seminar: Code in Context',
    note: 'Received for joining Code in Context, a seminar on how AI fits into the way developers work today.',
    image: '/certificates/cert1.jpe',
  },
  {
    year: '2025',
    type: 'Seminar',
    title: 'Code in Context - The Modern Developers Guide to AI',
    from: 'WIT RTS Conference Room',
    note: 'Code. Design. Build',
    image: '',
  },
  {
    year: '2025',
    type: 'Webinar',
    title: 'Tech Talk on Cross-Platform App Development Essentials for IT Students',
    from: 'Tech Talk',
    note: 'Build powerful applications across multiple platforms',
    image: '/certificates/web1.jpe',
  },
  {
    year: '2025',
    type: 'Seminar',
    title: 'Super Agents Live Workshop',
    from: 'ClickUp',
    note: 'How to start building agents that help with real work.',
    image: '/certificates/sem2.png',
  },
  {
    year: '2025',
    type: 'Organization',
    title: 'Vice Chief Creative Officer',
    from: 'AWS Learning Club',
    note: 'no work yet.',
    image: '',
  },
]

const plurals = {
  Certificate: 'Certificates',
  Seminar: 'Seminars',
  Organization: 'Organizations',
  Competition: 'Competitions',
}

const filters = ['All', ...new Set(items.map((item) => item.type))]

function Certificates() {
  const [viewing, setViewing] = useState(null)
  const [filter, setFilter] = useState('All')

  const shown = filter === 'All' ? items : items.filter((item) => item.type === filter)
  const years = [...new Set(shown.map((item) => item.year))].sort((a, b) => b.localeCompare(a))

  useEffect(() => {
    if (!viewing) return

    const handleKey = (event) => {
      if (event.key === 'Escape') setViewing(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [viewing])

  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <h2 className="section-title" data-reveal>
          Certificates &amp; Activities
        </h2>
        <p className="section-desc" data-reveal>
          Courses I finished, seminars I joined, and orgs I'm part of. Plus a
          quick note on what I got out of each one.
        </p>

        {filters.length > 2 && (
          <div className="cert-filters" role="group" aria-label="Filter by type" data-reveal>
            {filters.map((type) => (
              <button
                key={type}
                type="button"
                className={`cert-filter ${filter === type ? 'active' : ''}`}
                aria-pressed={filter === type}
                onClick={() => setFilter(type)}
              >
                {plurals[type] ?? type}
              </button>
            ))}
          </div>
        )}

        <div className="cert-timeline" data-reveal>
          {years.map((year) => (
            <div key={year} className="cert-year-group">
              <h3 className="cert-year">{year}</h3>

              <ul className="cert-list">
                {shown
                  .filter((item) => item.year === year)
                  .map((item) => (
                    <li
                      key={`${item.type}-${item.title}`}
                      className={`cert-item ${item.image ? 'cert-item--image' : ''}`}
                    >
                      <span className="cert-star" aria-hidden="true">
                        ✦
                      </span>

                      <div className="cert-text">
                        <p className="cert-meta">
                          {item.type} · {item.from}
                        </p>
                        <h4 className="cert-title">
                          {item.title}
                          {item.link && (
                            <a
                              href={item.link}
                              className="cert-link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              View <HiArrowUpRight aria-hidden="true" />
                            </a>
                          )}
                        </h4>
                        {item.note && <p className="cert-note">“{item.note}”</p>}
                      </div>

                      {item.image && (
                        <button
                          type="button"
                          className="cert-thumb"
                          onClick={() => setViewing(item)}
                          aria-label={`View picture of ${item.title}`}
                        >
                          <img src={item.image} alt="" loading="lazy" />
                        </button>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {viewing && (
        <div
          className="cert-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={viewing.title}
          onClick={() => setViewing(null)}
        >
          <figure onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="cert-viewer-close"
              onClick={() => setViewing(null)}
              aria-label="Close"
              autoFocus
            >
              <HiXMark aria-hidden="true" />
            </button>
            <img src={viewing.image} alt={viewing.title} />
            <figcaption>
              <strong>{viewing.title}</strong>
              <span>
                {viewing.from} · {viewing.year}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

export default Certificates
