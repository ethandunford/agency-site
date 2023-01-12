import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss'

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024 && isOpen) {
        setIsOpen(false)
      }
    })
  })

  return (
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/">
              <h1 className="is-size-3">Agency Site</h1>
            </Link>
            <button className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={toggleNav}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/blog" className="navbar-item">Blog</Link>
              <Link to="/contact" className="navbar-item">
                <button className="button is-primary">Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
