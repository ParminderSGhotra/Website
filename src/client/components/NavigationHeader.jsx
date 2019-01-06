import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer  } from 'react-router-bootstrap';

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
            <IndexLinkContainer  to="/">
                <NavItem activeClassName="active">Home</NavItem>
            </IndexLinkContainer > 
            <LinkContainer to="/about">
                <NavItem activeClassName="active">About</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
                <NavItem activeClassName="active">Contact Us</NavItem>
            </LinkContainer>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationHeader;
