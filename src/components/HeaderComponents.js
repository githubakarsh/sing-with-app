import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const HeaderComponent = ({
    
}) => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Genres" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">POP</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Melodies</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">BASS</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Rock n Roll</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link eventKey={2}>
          Anthony
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default HeaderComponent;
