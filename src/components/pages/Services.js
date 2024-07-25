import React from 'react';
import '../../App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Services() {
  return (
    <>
     <Navbar></Navbar>
      <div className='Services_Container'  >
        <div className='Form_Conatiner_Services' >
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={"saiteja"} disabled  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password"    />
      </FloatingLabel>
        </div>
      </div>
      <Footer />
    </>
);
}
