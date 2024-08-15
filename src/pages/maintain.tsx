import React from 'react'
import '../styles/maintain.css'

const maintain = () => {
  return (
    <div className='container'>

      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img className="img1" src="/images/logo-final.png" alt="logo" />
      </div>

      <div  style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        
      <div className='div1'>

      <img src="/images/front-maintainable-link.png" alt="Maintain" />      </div>

      <div className='div2'>
      <h1>Design is the matter of choice ...</h1>
      <p>At our company, we prioritize your digital needs with unwavering dedication. Our expert team is here for you 24/7, ensureing seamless support and guidance. We offer tailored solutions to meet your uniquw requirements, fostering your growth and success online.</p>

      <p>With cutting-edge technology and personalized care, we transform your ideas into reality. Experiance reliability and innovation like never before.</p>

      <p>Partner with us and see how we care for your business as if it were our own. Ypur satisfaction is our top priority, and your success is our mission. Trust us to be there for your every step of the way. </p>
      </div>
      
      </div>

    </div>
    
  );
}

export default maintain
