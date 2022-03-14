import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebaseapp } from './service/firebase.js';
import AuthService from './service/auth_service.js';

const authService = new AuthService(firebaseapp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
