import React from 'react'
import '../styles/features.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Features = ({ icon, title, text, color }) => {
  return <div className="features">
    <div>
      <FontAwesomeIcon icon={icon} style={{ color, }} />
    </div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
}

export default Features;