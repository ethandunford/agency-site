import React from "react";

const Error = ({ msg }) => {
  return msg ? <p className="error-msg has-text-danger">{msg}</p> : ""
}

export default Error