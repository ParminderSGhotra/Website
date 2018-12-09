import React, { Component } from 'react';
import '../../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "react-bootstrap";

class NavigationHeader extends Component {
  render() {
    return (
      <div className="NavigationHeader">
        <Navbar>Home</Navbar>
      </div>
    );
  }
}

export default NavigationHeader;
