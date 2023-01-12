import React, { useState } from 'react';
import Teams from '../components/teams'
import TextInput from '../components/input'

const Contact = () => {

  const [form, updateForm] = useState({ name: "", email: "", enquiry: "" })

  return (
    <div>
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <h1 className="is-size-1">Contact Us</h1>
                <p className="is-size-4">For any queries or comments, please fill in the following form, we will get back to you as soon as possible</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-6">
          <div className="columns">
            <div className="column is-6">
              <h3 className="is-size-3">Contact us</h3>
              <form>
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
                    <input className="input" type="text" placeholder="Text input" />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Enquiry</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                  </div>
                </div>
                <button className="button is-primary">Contact Us</button>
              </form>
            </div>
            <div className="column is-6">
              <div className="mb-5">
                <h3 className="is-size-3">Address</h3>
                <p><strong>Agency Site</strong> <br />45 Lorem ipsum dolor <br />  sit amet, consectetur  <br />Vestibulum </p>
                <h3 className="is-size-3">Telephone</h3>
                <a className="tel" href="tel:+44123456789">+44123456789</a>
              </div>
              <div><iframe title="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-grey py-6">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">Discover more about our high performing team</p>
            </div>
          </div>
          <Teams />
        </div>
      </section>
    </div>
  );
};

export default Contact;
