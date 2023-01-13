import React, { useState, useEffect } from 'react';
import { scrollToError, successMessage, options } from '../app/form';
import TextInput from '../components/inputs/input'
import SelectBox from '../components/inputs/select'
import AppButton from '../components/button'
import Error from '../components/error'
import '../styles/hero.scss'

const Hero = () => {

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, updateForm] = useState({ name: "", email: "", enquiry: "", })
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
            <AppButton btnText="Contact Us" loading={loading} disabled={disabled} handClick={submit} />
            {successMessage(success)}
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Hero;