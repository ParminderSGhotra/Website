import React from 'react';
import App from "./components/App.jsx";
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

if (typeof window !== 'undefined') {
ReactDOM.render(
  <AppContainer>
    <BrowserRouter><App /></BrowserRouter>
      
  </AppContainer>,
  document.getElementById('app')
);
}