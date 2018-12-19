import React from 'react';
import App from "./components/App.jsx";
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';

if (typeof window !== 'undefined') {
ReactDOM.render(
  <AppContainer>
      <App />
  </AppContainer>,
  document.getElementById('app')
);
}