import { createElement } from 'react'
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTelephone,
} from 'react-icons/bs'
import { email, github } from '../links'

const contacts = [
  {
    icon: BsEnvelope,
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
  },
  {
    icon: BsTelephone,
    label: 'Phone',
    value: '0963 666 3007',
    href: 'tel:+639636663007',
  },
  {
    icon: BsGithub,
    label: 'GitHub',
    value: 'github.com/Alyks-cell',
    href: github,
  },
  {
    icon: BsFacebook,
    label: 'Facebook',
    value: 'Alex Catequista',
    href: 'https://www.facebook.com/bangtan.bangtan.bang.bangtan11/',
  },
  {
    icon: BsInstagram,
    label: 'Instagram',
    value: '@alxndra_ctqist',
    href: 'https://www.instagram.com/alxndra_ctqist/',
  },
]

function Contact() {
  return (
    <>
      <section id="contact" className="section contact">
        <div className="container contact-inner">
          <div className="contact-text" data-reveal>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-desc">
              I'm currently looking for OJT/internship opportunities. Feel free
              to send me a message if you'd like to work together or have any
              questions.
            </p>
            <a href={`mailto:${email}`} className="btn btn--primary">
              Send me an email
            </a>
          </div>

          <ul className="contact-list" data-reveal>
            {contacts.map(({ icon, label, value, href }) => {
              const external = href.startsWith('http')

              return (
                <li key={label}>
                  <a
                    href={href}
                    className="contact-item"
                    {...(external && { target: '_blank', rel: 'noreferrer' })}
                  >
                    <span className="contact-icon">
                      {createElement(icon, { 'aria-hidden': true })}
                    </span>
                    <span className="contact-label">{label}</span>
                    <span className="contact-value">{value}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} Alex Catequista</p>
          <a href="#home">Back to top &uarr;</a>
        </div>
      </footer>
    </>
  )
}

export default Contact
