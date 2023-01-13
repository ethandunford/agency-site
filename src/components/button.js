import React from "react";

const Button = ({ btnText, handClick, loading, disabled }) => {
  return <button className={`button is-primary ${loading ? 'is-loading' : ''}`} disabled={disabled} onClick={(e) => handClick(e)}>{btnText}</button>
}

export default Button