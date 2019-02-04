import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem} from "react-bootstrap";
import { LinkContainer, IndexLinkContainer  } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

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
        {/* <Nav>
          <NavItem><NavLink to='/'>Home</NavLink></NavItem>
          <NavItem><NavLink to='/about'>About</NavLink></NavItem>
        </Nav> */}
          <Nav>
            <IndexLinkContainer  to="/" href="/" >
                <NavItem>Home</NavItem>
            </IndexLinkContainer > 
            <LinkContainer to="/about" href="/about">
                <NavItem>About</NavItem>
            </LinkContainer>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationHeader;
