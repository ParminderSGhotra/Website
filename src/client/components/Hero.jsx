import React, { Component } from 'react';
import { Jumbotron, Container} from "react-bootstrap";


class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <Jumbotron fluid>            
            <h1>Deals go here</h1>
            <p>
            All deals.
            </p>           
        </Jumbotron>;
      </div>
    );
  }
}

export default Hero;
