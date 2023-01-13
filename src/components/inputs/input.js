import React from 'react'

const TextInput = ({ value, name, placeholder, handleChange, disabled }) => {
  return (
    <input className="input" type="text" name={name} placeholder={placeholder} value={value} disabled={disabled} onChange={(e) => { handleChange(e) }} />
  )
}

export default TextInput;