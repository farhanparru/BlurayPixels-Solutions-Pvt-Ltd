import React from 'react';
import './asstes/styles/home.css'
import Image from './asstes/images/spotlight.jpg'
function Home() {
  return (
    <div className="container">
      <div className="left">
        <div className="headding">
          <h1>Turning Your Problems into Seamless Digital Experiences</h1>
        </div>
        <div className="disc">
          <p>At [Your Agency Name], we specialize in transforming your business challenges into smooth, efficient digital solutions. Whether it's optimizing your web presence, developing custom apps, or boosting your online visibility, our expert team is here to turn your ideas into impactful digital experiences that drive growth and success.</p>
        </div>
      </div>
      <div className="right">
        <div className="spotlight-img">
          <img src={Image} alt="Spotlight" />
        </div>
      </div>
    </div>
  );
}

export default Home;
