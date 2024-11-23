// Services.js
import React from 'react';
import './asstes/styles/Services.css'; 

const servicesData = [
  {
    title: 'Web Development',
    description: 'Responsive, streamlined websites with elevated visibility and lead conversions.',
    icon: '🌐', // Replace with your desired icons or images
  },
  {
    title: 'App Development',
    description: 'Professionally ideated apps to support futuristic business ideas.',
    icon: '📱',
  },
  {
    title: 'Cloud Hosting',
    description: 'Fast, secure, and scalable cloud hosting solutions with 24/7 support.',
    icon: '☁️',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning designs to enhance user experiences.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'SEO strategies & analytics enhancing organic traffic & curated content.',
    icon: '📈',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Services</h1>
      <p className="services-subheading">
      We infuse innovation, creativity, and strategic technological expertise into every project we undertake. With a focus on thinking outside the box, delivering outstanding results, and exceeding expectations, we bring your vision to life in ways you never imagined. Our services are driven by a passion for excellence, ensuring that each client experiences solutions tailored to their unique goals and challenges—leaving them inspired and impressed by what we achieve together.
      </p>
      <h2>Explore our Expertise right below</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
