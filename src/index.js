import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './App.css';

ReactDOM.render(
  <BrowserRouter basename="/react-webpack-simple/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
