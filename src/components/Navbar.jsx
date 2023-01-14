import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import "./Navbar.css"
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' className="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>&#128330;&#65039;Horizon Living</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 navbtns'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
               Daily Living
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Campus Tour</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Resources</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            <Button  className="btn btn-outline-success bg-warning">Sign In</Button>
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}