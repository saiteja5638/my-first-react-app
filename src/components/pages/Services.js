import React from 'react';
import '../../App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';

export default function Services() {
  return (
    <>
     <Navbar></Navbar>
      <div className='Services_Container'  >
        <div className='Form_Conatiner_Services' >
        <h1 >Copy Credentials</h1>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
       
        <Form.Control type="email" placeholder="name@example.com" value={"saiteja"} disabled  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="text" placeholder="Password"  value={"Spark@5638"}   disabled  />
      </FloatingLabel>
      <Button className='Open_app_css'  href='https://www.youtube.com/' target='blank' >Open Application</Button>
        </div>
      </div>
      <Footer />
    </>
);
}
