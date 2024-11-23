import React from 'react'
import Image from './asstes/images/whoweare.jpg'
function Who() {
  return (
    <div className="container">
        <div className="right">
      <div className="spotlight-img">
        <img src={Image} alt="Spotlight" />
      </div>
    </div>
    <div className="left">
      <div className="headding">
        <h1>Who we are </h1>
      </div>
      <div className="disc">
        <p>At [Your Agency Name], we are more than just a service provider—we are your trusted partners in navigating the dynamic digital world. With a passion for innovation and a commitment to delivering excellence, we specialize in crafting personalized solutions that empower businesses to thrive. Whether it’s building captivating websites, robust applications, or driving growth through digital marketing and cloud services, our goal is to turn your vision into reality. Together, we transform challenges into opportunities, helping you succeed in today’s fast-paced digital landscape.</p>
      </div>
    </div>
  </div>
  )
}

export default Who
