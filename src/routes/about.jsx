import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      
      {/* TEXT */}
      <div className="about-text">
        <h1 className="about-heading">
          Hi, I'm Alex👋<br />
          <span>UI/UX Designer in Progress</span>
        </h1>

        <p className="about-subtext">
          I’m a second-year BSIT student at Western Institute of Technology 
          who enjoys turning ideas into creative digital projects. 
          I’m always eager to learn new skills and improve in IT and design.
        </p>
      </div>

      {/* IMAGE STACK */}
      <div className="about-img-wrapper">
        <img src="image.jpg" className="about-img main-img" />
        <img src="im2.jpg" className="about-img back-img1" />
        <img src="im1.jpg" className="about-img back-img2" />
      </div>

    </section>
  )
}

export default About