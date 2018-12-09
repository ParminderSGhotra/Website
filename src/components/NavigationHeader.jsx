import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, NavDropdown, DropdownToggle, DropdownMenu,  MenuItem } from "react-bootstrap";

class NavigationHeader extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Family 1 Optical</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavigationHeader;
