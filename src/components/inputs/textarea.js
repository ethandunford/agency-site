import React from 'react'

const TextArea = ({ value, name, placeholder, handleChange, disabled }) => {
  return (
    <textarea className="textarea" name={name} placeholder={placeholder} value={value} disabled={disabled} onChange={(e) => { handleChange(e) }} style={{ maxHeight: "300px" }} />
  )
}

export default TextArea;