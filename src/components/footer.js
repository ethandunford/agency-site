import React from 'react'

const Footer = () => {

  const d = new Date();
  let year = d.getFullYear();

  return <footer>
    <div className="container py-3">
      <div className="columns">
        <div className="column">
          © {year} AgencyPage. By <a href="https://github.com/ethandunford" target="_blank" rel="noreferrer">Ethan Dunford</a>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;