import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function BasicExample() {

  const form = useRef();

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  
  return (
    <div className='Contact-container'>
      <div className='Contact-component'>
    <Form ref={form} onSubmit={sendEmail}>

      <h1>Lets talk....</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" name='user_name'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="user_email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message </Form.Label>
        <Form.Control as="textarea" placeholder="Message..." row={3} name="message"/>
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  );

};

export default BasicExample;