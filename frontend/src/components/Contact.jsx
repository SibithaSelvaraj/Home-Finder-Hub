import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './Contact.css'
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_frkqxaq', 'template_su7x72e', form.current, {
        publicKey: 'OBX9yKWujS036r-eg',
      })
      .then(
        () => {
          alert('Message send successfully');
          form.current.reset(); // This will clear all fields in the form, including the textarea

        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className="whole">
      <div className="cont-heading">
        <h1>Contact Us</h1>
      </div>
      <p className='cont-desc'> Feel free to utilize the form provided to send us a message directly, and our dedicated team will promptly assist you with your query. We value your engagement and are committed to ensuring a responsive and personalized experience for every customer.</p>
    <div className="contact-page">
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206926.10752631398!2d77.62735179776469!3d11.37995916452771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e0!3m2!1sen!2sin!4v1711081377864!5m2!1sen!2sin"
       width="750"
       height="550"
       style={{ border: "1px solid #ccc",borderRadius: "10px",boxShadow:" 0 0 10px rgba(0, 0, 0, 0.3)"}} 
       allowfullscreen=""
        loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">

      </iframe>
       
      </div>
      <div className="container" style={{borderRadius:"10px"}}>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <input type="text" id="name" placeholder='Name' name="from_name" required />
            <input type="email" id="email" placeholder='Email' name="from_email" required />
            <textarea id="message" placeholder='Message' name="message" required></textarea>
            <button style={{ backgroundColor: '#00B98E',padding: "15px" }} className='cont-button' type="submit">Send Message</button>
          </form>
        </div>
      </div>

    </div>
    </div>
    
    </>
  );
};

export default Contact;
