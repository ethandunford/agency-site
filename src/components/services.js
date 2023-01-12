import React from 'react'
import ServiceBox from './service-box'
import { faChartBar, faHeart, faAnchor } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  const services = [
    {
      icon: faChartBar,
      title: "Google Analitycs",
      text: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
      bgColor: "#3e8ed0"
    },
    {
      icon: faHeart,
      title: "Brand Awareness",
      text: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
      bgColor: "#f14668"
    },
    {
      icon: faAnchor,
      title: "Graphic Designs",
      text: "Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius netsum.",
      bgColor: "#00c4a7",
    }
  ]

  const s = services.map((el) => {
    return <div className="column">
      <ServiceBox
        key={el.title}
        icon={el.icon}
        title={el.title}
        text={el.text}
        bgColor={el.bgColor}
      />
    </div>
  })

  return <div className="columns">{s}</div>
}

export default Services