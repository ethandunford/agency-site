import React, { useState, useEffect } from 'react'
import TextInput from '../components/inputs/input'
import '../styles/hero.scss'

const Hero = () => {

  const [form, updateForm] = useState({ name: "", email: "", enquiry: "" })

  return <section className="hero is-large home-hero">
    <div className="container">
      <div className="columns">
        <div className="column is-two-fifths pt-6 intro">
          <h1>Award-Winning Agency Based In England</h1>
          <p>Excepteur sint occaecat cupidatat nonet proident, vante nisn culpa qui officia deserunt etimus quis autem nets lorem entimus velis netsad.</p>
        </div>
        <div className="column is-offset-1">
          <form>
            <h3>Contact Us</h3>
            <p>Have any queries? Get in touch today.</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <TextInput placeholder="Name" value={form.name} />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <TextInput placeholder="Email" value={form.email} />
              </div>
            </div>
            <div className="field">
              <label className="label">Enquiry</label>
              <div className="control">
                <TextInput placeholder="Enquiry" value={form.name} />
              </div>
            </div>
            <button className="button is-primary">Contact Us</button>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Hero;