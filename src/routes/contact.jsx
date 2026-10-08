import React from 'react'
import { BsTelephone, BsEnvelope, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs'
import { HiArrowUpRight, HiArrowUp } from 'react-icons/hi2'

const EMAIL = 'btsxtxt27@gmail.com'

const contacts = [
  {
    icon: <BsEnvelope />,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <BsTelephone />,
    label: 'Phone',
    value: '0963 666 3007',
    href: 'tel:+639636663007',
  },
  {
    icon: <BsGithub />,
    label: 'GitHub',
    value: 'Alyks-cell',
    href: 'https://github.com/Alyks-cell',
  },
  {
    icon: <BsFacebook />,
    label: 'Facebook',
    value: 'Alex Catequista',
    href: 'https://www.facebook.com/bangtan.bangtan.bang.bangtan11/',
  },
  {
    icon: <BsInstagram />,
    label: 'Instagram',
    value: '@alxndra_ctqist',
    href: 'https://www.instagram.com/alxndra_ctqist/',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section contact">

      <div className="contact-header" data-reveal>
        <p className="section-label"><span>04</span> Contact</p>
        <h2 className="contact-heading">
          Let's make something <em>together.</em>
        </h2>
        <p className="section-sub">
          Have a project, an opportunity, or just want to say hi? My inbox is open.
        </p>
        <a href={`mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio`} className="btn btn--primary btn--lg">
          Say hello <HiArrowUpRight />
        </a>
      </div>

      <div className="contact-grid" data-reveal>
        {contacts.map((item) => {
          const external = item.href.startsWith('http')
          return (
            <a
              key={item.label}
              href={item.href}
              className="contact-card"
              {...(external && { target: '_blank', rel: 'noreferrer' })}
            >
              <span className="contact-card-icon">{item.icon}</span>
              <span className="contact-card-text">
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-value">{item.value}</span>
              </span>
              <HiArrowUpRight className="contact-card-arrow" />
            </a>
          )
        })}
      </div>

      <footer className="contact-footer">
        <p className="contact-copyright">
          &copy; {new Date().getFullYear()} Alex Catequista
        </p>
        <a href="#home" className="contact-top-btn" aria-label="Back to top">
          <HiArrowUp />
        </a>
      </footer>

    </section>
  )
}

export default Contact
