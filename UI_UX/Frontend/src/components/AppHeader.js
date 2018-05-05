import React from 'react';
import logo from '../images/mybit-logo-white.png';
import '../styles/AppHeader.css';

export const AppHeader = () => {
  return (
    <div className="grid AppHeader">
      <img className="AppHeader_logo" src={logo} />
      <p className="AppHeader_connect">Connect account</p>
    </div>
  );
};
