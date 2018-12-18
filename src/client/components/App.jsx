import React, { Component } from 'react';
import '../css/App.css';
import NavigationHeader from './NavigationHeader.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationHeader></NavigationHeader>
      </div>
    );
  }
}

export default App;
