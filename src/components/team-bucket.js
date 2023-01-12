import React from 'react'
import '../styles/team-bucket.scss'

const TeamBucket = ({ img, name, jobTitle, description }) => {
  return <div className="team-bucket">
    <img src={img} alt={name} />
    <div className="p-5">
      <h3>{name}</h3>
      <p className="job-title">{jobTitle}</p>
      <p className="description">{description}</p>
    </div>
  </div>
}

export default TeamBucket;