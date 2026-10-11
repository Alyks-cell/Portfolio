import { HiArrowUpRight } from 'react-icons/hi2'
import StarrySky, { Constellation } from '../components/StarrySky'
import { email, github } from '../links'

const contacts = [
  {
    label: 'Email',
    value: email,
    action: 'Send an email',
    href: `mailto:${email}`,
  },
  {
    label: 'Phone',
    value: '0963 666 3007',
    action: 'Call',
    href: 'tel:+639636663007',
  },
  {
    label: 'GitHub',
    value: 'github.com/Alyks-cell',
    action: 'Open GitHub',
    href: github,
    external: true,
  },
]

function Contact() {
  return (
    <>
      <section id="contact" className="section contact">
        <StarrySky />
        <div className="container">
          <div className="contact-header" data-reveal>
            <div>
              <h2 className="section-title">Get in Touch</h2>
              <p className="section-desc">
                Feel free to send me a message if you'd like to work together or
                have any questions.
              </p>
            </div>
            <Constellation />
          </div>

          <ul className="contact-links" data-reveal>
            {contacts.map(({ label, value, action, href, external }) => {
              const linkProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

              return (
                <li key={label}>
                  <span className="contact-label">{label}</span>
                  <a href={href} className="contact-value" {...linkProps}>
                    {value}
                  </a>
                  <a
                    href={href}
                    className="contact-arrow"
                    aria-label={`${action}: ${value}`}
                    {...linkProps}
                  >
                    <HiArrowUpRight aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Alex Catequista </p>
          <a href="#home">Back to top &uarr;</a>
        </div>
      </footer>
    </>
  )
}

export default Contact
