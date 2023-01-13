import React from 'react'
import zenScroll from "zenscroll";

export const options = ["Select", "Seo", "Brand Awareness", "Graphic Designs", "Web Development", "Other"]

export const scrollToError = () => {
  const errors = document.getElementsByClassName("error-msg")
  if (errors.length > 0) {
    zenScroll.center(document.getElementsByClassName("error-msg")[0])
  }
}

export const successMessage = (success) => {
  if (success) {
    return <p className="has-text-black mt-3">we have received and a member of the team will get back shortly.</p>
  }
  return ""
}
