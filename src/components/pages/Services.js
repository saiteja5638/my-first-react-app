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
        <h1 >Copy Credentials to Access HUB </h1>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
       
        <Form.Control type="email" placeholder="name@example.com" value={"SkillNexus@gmail.com"} disabled  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="text" placeholder="Password"  value={"SkillNexus@123"}   disabled  />
      </FloatingLabel>
      <Button className='Open_app_css'  href='https://5f61e87atrial.launchpad.cfapps.us10.hana.ondemand.com/site?siteId=0a191b1a-c9ed-468c-b91c-a8b5a8314fa5#Shell-home' target='blank' >Open Application</Button>
        </div>
      </div>
      <Footer />
    </>
);
}
