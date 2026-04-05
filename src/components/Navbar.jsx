import React from 'react'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">
        <span className="navbar-logo">
          <CgProfile className="navbar-icon" />
          <span className="navbar-title">alyksanFR</span>
        </span>
      </a>

      <div className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar