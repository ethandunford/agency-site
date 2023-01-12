import React from 'react'
import TeamBucket from './team-bucket'
import TeamImg1 from '../images/team001.jpg'
import TeamImg2 from '../images/team002.jpg'
import TeamImg3 from '../images/team003.jpg'

const teamMemembers = [
  {
    img: TeamImg1,
    name: "Christina Hawkins",
    jobTitle: "Head of Seo",
    description: "Christina is our head of seo and has developed search strategies for a variety of clients for over 5 years."
  },
  {
    img: TeamImg2,
    name: "Andres Johanson",
    jobTitle: "Marketing Manager",
    description: "Andres fell in love with marketing at the school and looks forward to being part of the industry for years."
  },
  {
    img: TeamImg3,
    name: "Alexandra Smiths",
    jobTitle: "SEO Specialist",
    description: "Graduating with a degree in Spanish, English and French, she has always loved writing."
  }
]

const t = teamMemembers.map((el) => {
  return <div className="column">
    <TeamBucket
      key={el.name}
      img={el.img}
      name={el.name}
      jobTitle={el.jobTitle}
      description={el.description}
    />
  </div>
})

const Teams = () => {
  return <div className="columns">{t}</div>
}

export default Teams