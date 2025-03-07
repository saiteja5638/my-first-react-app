import React ,{ useState }  from 'react';
import '../../App.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useLocation, useSearchParams ,useHistory ,Link  } from 'react-router-dom';
export default function SignUp() {
  var [id, setId] = useState('');

  const handleInputChange = (event) => {
    setId(event.target.value);
  };
  const [searchParams] = useSearchParams();
       id = searchParams.get('$id');

  return (
    <>
      <Navbar></Navbar>
      <div className='Services_Container' >

        <div className='Form_Conatiner_Services' >
          <Image src="https://thumbs.dreamstime.com/b/clever-nerd-emoji-glasses-vector-cartoon-isolated-white-background-320488478.jpg" width={"150px"} height={"140px"} roundedCircle className='Signup_image' />
          <FloatingLabel
            controlId="floatingInput"
            label="User Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="name**" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Contact Number"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="703*****" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="You Looking For "
            className="mb-3"
          >
            <Form.Control type="text" value={id}   disabled={!!id}   onChange={handleInputChange} />
          </FloatingLabel>

          <Button className="Open_app_css">
            <button className="Open_app_css" ></button>
  <Link  style={{ textDecoration: 'none', color: 'white' }}  to="/products">Sign Up</Link>
</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
