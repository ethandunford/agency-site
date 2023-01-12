import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';
import AboutImage from './../images/about001.jpg'
import AboutImage1 from './../images/about1.jpg'
import AboutImage2 from './../images/about2.jpg'
import AboutImage3 from './../images/about3.jpg'
import Awards from '../components/awards'
import Hero from '../components/hero.js'
import Services from '../components/services.js'
import Pill from '../components/pill'
import Features from '../components/features.js'
import Teams from '../components/teams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faScrewdriver, faUser, faBell, faGift, faPiggyBank, faComment, faChartLine, faNetworkWired, faRocket } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  const [aboutPills, setAboutPills] = useState(
    {
      1: {
        active: true,
        image: AboutImage1,
        icon: faChartLine,
        title: "Customize your workflow.",
        text: "Manage any process and be ready to address any challenge with total ease.",
        color: "#3e8ed0"

      },
      2: {
        active: false,
        image: AboutImage2,
        icon: faNetworkWired,
        title: "Easy onboarding, fast adoption.",
        text: "With Square getting your team on board is as simple as sending an email.",
        color: "#f14668"
      },
      3: {
        active: false,
        image: AboutImage3,
        icon: faRocket,
        title: "Improve subscriber retention.",
        text: "Analyze customers by region, discounts and more and put a plan in place.",
        color: "#00c4a7"
      }
    }
  )

  const [aboutImage, setAboutImage] = useState(aboutPills[1]["image"])

  const updateAboutPills = (key) => {
    Object.keys(aboutPills).forEach((el) => {
      if (aboutPills[el].active === true) {
        const obj = Object.assign({}, aboutPills)
        obj[el].active = false
        obj[key].active = true
        setAboutPills(obj)
        setAboutImage(aboutPills[key].image)
      }
    })
  }

  const generateAboutPills = () => {
    return <>
      {Object.keys(aboutPills).map((el) => {
        return <Pill
          icon={aboutPills[el].icon}
          title={aboutPills[el].title}
          text={aboutPills[el].text}
          color={aboutPills[el].color}
          active={aboutPills[el].active}
          objKey={el}
          onPress={updateAboutPills}
        />
      })}
    </>
  }

  return (
    <main>
      <Hero />
      <Awards />
      <section className="what-we-do py-5">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="section-title">What We Do</h2>
              <p className="section-subtitle">Discover how our amazing team can help your business.</p>
            </div>
          </div>
          <Services />
        </div>
      </section>
      <section className="py-6">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src={AboutImage} alt="About Us" className="image-shadow" />
            </div>
            <div className="column discover">
              <h3 className="section-title">Discover how we can help you to grow your business fast.</h3>
              <p>Velis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, seditum netis velas matrix net nesciunt.</p>
              <ul>

                <li><FontAwesomeIcon icon={faCheck} /> Quias netus magni netsum eos qui ratione sequi.</li>
                <li><FontAwesomeIcon icon={faCheck} /> Venis ratione sequi netus enim quia tempor magni.</li>
                <li><FontAwesomeIcon icon={faCheck} /> Enim ipsam netus voluptatem quia voluptas.</li>
              </ul>
              <Link to="/contact">
                <button className="button is-primary">Discover More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-grey py-6">
        <div className="container">
          <div className="columns">
            <div className="column">
              {generateAboutPills()}
            </div>
            <div className="column">
              <img src={aboutImage} alt="About Us" className="image-shadow" />
            </div>
          </div>
        </div>
      </section>
      <section className="features py-6">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="section-title">Amazing Features</h3>
              <p className="section-subtitle">Quis autem velis ets reprehender net etid quiste voluptate.</p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Features
                title="Support 24/7"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faScrewdriver}
                color="#a9d129"
              />
            </div>
            <div className="column">
              <Features
                title="User Friendly"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faUser}
                color="#3273DC"
              />
            </div>
            <div className="column">
              <Features
                title="Notifications"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faBell}
                color="#fe9c24"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Features
                title="Accesibility"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faGift}
                color="#3273DC"
              />
            </div>
            <div className="column">
              <Features
                title="Cost Control"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faPiggyBank}
                color="#FFDD57"
              />
            </div>
            <div className="column">
              <Features
                title="Chat With Friends"
                text="Utise wisi enim minim veniam, quis tation ullamcorper suscipit et loboti nisl consequat nihis."
                icon={faComment}
                color="#00C4A7"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-grey py-6">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle">Discover more about our high performing team</p>
            </div>
          </div>
          <Teams />
        </div>
      </section>
    </main>
  );
};

export default Home;
