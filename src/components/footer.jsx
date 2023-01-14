import React from 'react';
import './Footer.css';
import advocate from '../assets/Mask Group.png';
import { Form, Button } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';

function footer() {
  return (
    <div className="footerOuter">
          <div className="footerInfoSection d-flex">
      <div>
        <img  className="advocate"src={advocate} alt="advocate" />
      </div>
      <div>
        <h2 className="schedule">
          Schedule a tour with a{' '}
          <span>
            <h1>Friendly Advocate</h1>
          </span>
        </h2>
        <h3>Send a &#128330;&#65039;</h3>
        <h6>
          Proin eget tortor risus. Praesent sapien massa, <br></br>convallis a
          pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
          malesuada. <br></br>Nulla porttitor accumsan tincidunt. Donec rutrum
          congue leo eget malesuada.
        </h6>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="textarea" placeholder="Your message" />
          </Form.Group>
          
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    <MDBFooter bgColor='light' className='text-center text-lg-left footer'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://gcteam.dev'>
          Hamza Dev
        </a>
      </div>
    </MDBFooter>
    </div>
    
  );
}

export default footer;
