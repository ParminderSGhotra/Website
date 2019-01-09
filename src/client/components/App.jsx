import React, { Component } from 'react';
import NavigationHeader from './NavigationHeader.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { StaticRouter, Route, Redirect, Switch, IndexRoute } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <div className="App">
      
      <NavigationHeader></NavigationHeader>
          <Switch>
            <Route path='/'component={Home} />
            <Route path='/about'component={About} />
          </Switch>
                   
      </div>
    );
  }
}

export default App;
