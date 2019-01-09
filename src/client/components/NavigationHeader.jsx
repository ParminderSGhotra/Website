import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer  } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

class NavigationHeader extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Family 1 Optical</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem><Link to='/'>Home</Link></NavItem>
          <NavItem><Link to='/about'>About</Link></NavItem>
        </Nav>
          {/* <Nav>
            <IndexLinkContainer  to="/" href="/" >
                <NavItem componentClass={Link}>Home</NavItem>
            </IndexLinkContainer > 
            <LinkContainer to="/about" href="/about">
                <NavItem componentClass={Link}>About</NavItem>
            </LinkContainer>           
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationHeader;
