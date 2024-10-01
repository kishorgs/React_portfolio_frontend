import React, { useEffect, useRef, useState } from 'react'
import '../css/Contact.css'
import image from '../images/contact-img.jpg'
import emailjs from "@emailjs/browser";
import Alert from '../components/Alert';


const Contact = ({setProgress}) => {
  const form = useRef();
  useEffect(()=>{
  setProgress(10)
  setTimeout(()=>{
  setProgress(100)
},500)

  },[setProgress])

  const [alert,setAlert]=useState(null)
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000); 
  };

  const sendEmail = (e) => {
   
    e.preventDefault();
    emailjs
      .sendForm(
        "service_axro96w",
        "template_y27dm5l",
        form.current,
        "h2m7l49m1sSvt4nct"
      )
      .then(
        (result) => {
          document.getElementById("form-contact").reset();
          showAlert('Mail sent successfully. Thank you for getting in touch!','success') // Show the success modal
          
        },
        (error) => {
          showAlert('Mail not sent','error')
        }
      );

      
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-form">
          <h1>Contact Me</h1>
        <form id='form-contact' ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name='user_name' id='name' placeholder='Enter your Name'/>
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id='email' placeholder='Enter your Email'/>
          <div className="message-are">
            
          </div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="5"></textarea>
          <button className='submit-btn' type='submit'>Submit</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={image} alt="contact" />
      </div>
    </div>
    {alert && (<Alert message={alert.message} type={alert.type} onClose={()=>{setAlert(null)}}/>)}
    </>
    
  )
}

export default Contact
