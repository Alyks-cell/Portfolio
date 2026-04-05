import React from 'react'
import { BsTelephone, BsEnvelope, BsInstagram, BsFacebook } from 'react-icons/bs'

const contacts = [
  {
    icon: <BsTelephone />,
    tooltip: '09636663007',
  },
    {
    icon: <BsFacebook />,
    tooltip: 'Alex Catequista',
    href: 'https://www.facebook.com/bangtan.bangtan.bang.bangtan11/',
  },
    {
    icon: <BsInstagram />,
    tooltip: 'alxndra_ctquist',
    href: 'https://www.instagram.com/alxndra_ctqist/',
  },
  {
    icon: <BsEnvelope />,
    tooltip: 'btsxtxt27@gmail.com',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="contact">

      <div className="contact-header">
        <p className="contact-label">Get in touch</p>
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-icons">
          {contacts.map((item, i) => (
            
              <a key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="contact-icon-btn"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="contact-icon">{item.icon}</span>
              <span className="contact-tooltip">{item.tooltip}</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="contact-footer">
        <p className="contact-copyright">
          alyksanFR© 2025. All rights reserved. ✦ Western Institute of Technology ✦
        </p>
      </footer>

      <a href="#home" className="contact-top-btn" aria-label="Back to top">↑</a>

    </section>
  )
}

export default Contact