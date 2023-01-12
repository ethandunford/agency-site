import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/service-box.scss'

const ServiceBox = ({ icon, title, text, bgColor }) => {
  return <div className="service-box">
    <FontAwesomeIcon icon={icon} style={{ backgroundColor: bgColor }} />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
}

export default ServiceBox;