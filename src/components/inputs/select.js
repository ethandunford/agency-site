import React from 'react'

const SelectBox = ({ value, name, options, disabled, handleChange }) => {

  const o = () => {
    return options.map((el) => {
      return <option value={el}>{el}</option>
    })
  }

  return <div className="select">
    <select name={name} value={value} disabled={disabled} onChange={(e) => { handleChange(e) }}>
      {o()}
    </select>
  </div>
}

export default SelectBox;