import React, { useState } from 'react';
import '../styles/contact.css';


const Contact = () => {

  // Contact form //
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      topic: '',
      message: ''
    });
  };
  // Contact form end //

  return (
    
    <div className='container'>

      <div  style={{display: 'flex', justifyContent: 'center'}}>
        <img className="img1" src="/images/logo-final.png" alt="logo" />
      </div>

      <div  style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>

      <div className='div1'>
        <img src="/images/front-getintouch-link.png" alt="Get in touch" />
      </div>

      <div className='div2'>
        <h1>Design is the matter of choice ...</h1>
        <p>At our company, we prioritize your digital needs with unwavering dedication. Our expert team is here for you 24/7, ensuring seamless support and guidance. We offer tailored solutions to meet your unique requirements, fostering your growth and success online.</p>
        <p>With cutting-edge technology and personalized care, we transform your ideas into reality. Experience reliability and innovation like never before.</p>
        <p>Partner with us and see how we care for your business as if it were our own. Your satisfaction is our top priority, and your success is our mission. Trust us to be there for you every step of the way.</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
