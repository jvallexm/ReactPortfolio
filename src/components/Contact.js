import React from 'react';
import './Contact.css';

const Contact = () =>{

    return(
      
      <section id="contact" className="text-center container-fluid">
        
        <h2>Contact</h2>
        
        <p id="contact-text" className="about-text">
          Jennifer can be reached at jvallexm@gmail.com
        </p>
        
        <h4 onClick={()=>window.scroll(0,0)} className="pointer">Back to Top <i className="fa fa-arrow-up"/></h4>
      
      </section>
  
     )
     
  }

export default Contact;