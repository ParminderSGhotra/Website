import React, { Component } from 'react';
import NavigationHeader from './NavigationHeader.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Route, Redirect, Switch, IndexRoute } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationHeader></NavigationHeader>
              <IndexRoute path='/'component={Home} />
              <Route path='/about' component={ About } />
              <Route path='/contact' component={ Contact } />
      </div>
    );
  }
}

export default App;
