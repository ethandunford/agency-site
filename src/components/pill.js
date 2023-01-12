import React from 'react'
import '../styles/pill.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pill = ({ icon, title, text, color, active, onPress, objKey }) => {
  return <div className={`pill ${active ? 'active' : ''}`} onClick={() => { onPress(objKey) }}>
    <div>
      <div className="circle">
        <FontAwesomeIcon icon={icon} style={{ color, }} />
      </div>
    </div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div >
}

export default Pill