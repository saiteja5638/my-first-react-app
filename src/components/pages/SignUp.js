import React from 'react';
import '../../App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
export default function SignUp() {
  return (
    <>
     <Navbar></Navbar>
    <div className='Services_Container' >
   
      <div className='Form_Conatiner_Services' >
      <Image src="https://e7.pngegg.com/pngimages/198/657/png-clipart-yocale-logo-business-cards-sales-others-miscellaneous-service.png"  width={"150px"}  height={"140px"} roundedCircle  className='Signup_image' />
      <FloatingLabel
        controlId="floatingInput"
        label="User Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name**"    />
      </FloatingLabel>
        
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com"    />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="text" placeholder="Password"     />
      </FloatingLabel>
      <Button className='Open_app_css'  href='https://www.youtube.com/' target='blank' >Sign Up</Button>
      </div>
    </div>
    <Footer />
    </>
  );
}
