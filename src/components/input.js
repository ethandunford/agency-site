import React from 'react'

const TextInput = ({ value, placeholder }) => {
  return (
    <input className="input" type="text" placeholder={placeholder} />
  )
}

export default TextInput;