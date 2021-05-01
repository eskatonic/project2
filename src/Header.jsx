import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


function Header(props) {
  return (
    <div>

        <Navbar bg="light" variant="light">
            <Navbar.Brand href='/'>HITCHHIKER'S GUIDE TO THE IMPERIUM</Navbar.Brand>
            <Nav className='mc-auto'>
                <Nav.Link href='map'>MAP OF THE GALAXY</Nav.Link>
                <Nav.Link href='library'>LIBRARY DATA</Nav.Link>
              <Nav.Link href='worlds'>WORLD LOCATOR</Nav.Link>
            </Nav>
        </Navbar>

    </div>
  );
}

export default Header;