import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../images/mybit-logo-white.png';
import './AppHeader.css';

export const AppHeader = () => {
  return (
    <Menu
      inverted
      huge
      borderless
      fixed={['left', 'top']}
      fluid
      style={{ backgroundColor: '#200344' }}
      className="AppHeader__menu"
    >
      <Menu.Header name="logo" className="AppHeader__logo">
        <Image width="104px" src={logo} />
      </Menu.Header>

      <Menu.Item>Connect account</Menu.Item>
    </Menu>
  );
};
