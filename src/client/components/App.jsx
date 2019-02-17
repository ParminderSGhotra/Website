import React, { Component } from 'react';
import NavigationHeader from './NavigationHeader.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Brands from './Brands.jsx';
import Home from './Home.jsx';
import Hero from './Hero.jsx';
import { BrowserRouter, Route, Redirect, Switch, IndexRoute } from 'react-router-dom';

class App extends Component {  
  render() {
    return (
      <div className="App">
      {/* <BrowserRouter> */}
      <NavigationHeader></NavigationHeader>
      
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/about"  component={About} />          
        <Route path="/contact"  component={Contact} />   
        <Route path="/brands"  component={Brands} />                                                     
      </Switch>
      <Hero></Hero>
      {/* </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
