import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from "react-bootstrap";
import '../css/bootstrap.css';

class NavigationHeader extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              About Us
            </NavItem>
            <NavItem eventKey={2} href="#">
              Contact Us
            </NavItem>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationHeader;
