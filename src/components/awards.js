import React from 'react'
import Award1 from '../images/award1a.png';
import Award2 from '../images/award2a.png';
import Award3 from '../images/award3a.png';
import Award4 from '../images/award4a.png';
import '../styles/awards.scss';

const Awards = () => {
  return (<section>
    <div className="container py-6">
      <div className="columns">
        <div className="column awards">
          <span>As featured in:</span>
          <div className="award-imgs">
            <img src={Award1} alt="award 1" width="150px" height="50px " />
            <img src={Award2} alt="award 2" width="61px" height="50px " />
            <img src={Award3} alt="award 3" width="254px" height="50px " />
            <img src={Award4} alt="award 4" width="122px" height="50px " />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Awards