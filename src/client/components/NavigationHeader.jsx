import React, { Component } from 'react';
import { Navbar} from "react-bootstrap";
import '../css/bootstrap.css';

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
