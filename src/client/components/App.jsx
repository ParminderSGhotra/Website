import React, { Component } from 'react';
import NavigationHeader from './NavigationHeader.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import { Router, Route, Redirect, Switch, IndexRoute } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <div className="App">
      {/* <BrowserRouter> */}
      <NavigationHeader></NavigationHeader>
      <Switch>
        <Route path='/about'  component={About} />
        <Route exact path='/' component={Home} />            
      </Switch>
      {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
