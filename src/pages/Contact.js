import React, { useState, useEffect } from 'react';
import { scrollToError, successMessage, options } from '../app/form';
import Teams from '../components/teams'
import TextInput from '../components/inputs/input'
import TextArea from '../components/inputs/textarea'
import SelectBox from '../components/inputs/select'
import AppButton from '../components/button'
import Error from '../components/error'

const Contact = () => {

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, updateForm] = useState({ name: "", email: "", enquiry: "", message: "" })
  const [errors, updateErrors] = useState({})

  useEffect(() => {
    scrollToError()
  }, [errors])

  const handleFormChange = (event) => {
    if (event.target.name) {
      const _form = Object.assign({}, form)
      _form[event.target.name] = event.target.value
      updateForm(_form)
    }
  }

  const submit = (event) => {
    event.preventDefault()
    updateErrors({})
    setLoading(true)
    setDisabled(true)
    setSuccess(false)
    const _errors = {}

    Object.keys(form).forEach((el) => {
      if (form[el] === "") {
        _errors[el] = "Required field"
      }
    })

    if (form["enquiry"] === "Select") {
      _errors["enquiry"] = "Required field"
    }

    setTimeout(() => {
      if (Object.keys(_errors).length > 0) {
        updateErrors(_errors)
        setSuccess(false)
        setLoading(false)
        setDisabled(false)

      } else {
        setSuccess(true)
        setLoading(false)
        setDisabled(false)
        updateForm({ name: "", email: "", enquiry: "", message: "" })
      }
    }, 2000)
  }

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
                    <TextInput name="name" placeholder="Name" value={form.name} disabled={disabled} handleChange={handleFormChange} />
                    <Error msg={errors.name} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <TextInput name="email" placeholder="Email" value={form.email} disabled={disabled} handleChange={handleFormChange} />
                    <Error msg={errors.email} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Enquiry</label>
                  <div className="control">
                    <SelectBox name="enquiry" value={form.enquiry} options={options} disabled={disabled} handleChange={handleFormChange} />
                    <Error msg={errors.enquiry} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <TextArea name="message" placeholder="Hello World" value={form.message} disabled={disabled} handleChange={handleFormChange} />
                    <Error msg={errors.message} />
                  </div>
                </div>
                <AppButton btnText="Contact Us" loading={loading} disabled={disabled} handClick={submit} />
                {successMessage(success)}
              </form>
            </div>
            <div className="column is-6">
              <div className="mb-5">
                <h3 className="is-size-3">Address</h3>
                <p><strong>Agency Site</strong> <br />45 Lorem ipsum dolor <br />  sit amet, consectetur  <br />Vestibulum </p>
                <h3 className="is-size-3">Telephone</h3>
                <a className="tel" href="tel:+44123456789">+44123456789</a>
              </div>
              <div><iframe title="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe></div>
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
