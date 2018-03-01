import './styles/reset.scss'
import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/app/index.js';

const root = document.getElementById('root')

ReactDOM.render((  
  <BrowserRouter>
    <App />
  </BrowserRouter>
), root);

