import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer  } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

class NavigationHeader extends Component {
  render() {
    return (
      
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" to="/">Family 1 Optical</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer  to="/" href="/" >
                <NavItem>Home</NavItem>
            </IndexLinkContainer > 
            <LinkContainer to="/about" href="/about">
                <NavItem>About us</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact" href="/contact">
                <NavItem>Contact us</NavItem>
            </LinkContainer>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>      
    );
  }
}

export default NavigationHeader;
