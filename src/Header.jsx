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
                <Nav.Link href='map'>MAP OF THE UNIVERSE</Nav.Link>
                <Nav.Link href='library'>LIBRARY DATA</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                <Button variant='outline-dark'>Search</Button>
            </Form> */}
        </Navbar>

    </div>
  );
}

export default Header;