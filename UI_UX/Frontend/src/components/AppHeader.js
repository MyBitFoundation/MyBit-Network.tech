import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../images/mybit-logo-white.png';

export const AppHeader = () => {
  return (
    <Menu
      inverted
      huge
      borderless
      fixed={['left', 'top']}
      fluid
      style={{ backgroundColor: '#200344' }}
    >
      <Menu.Header name="logo">
        <Image width="136px" src={logo} style={{ padding: '10%' }} />
      </Menu.Header>

      <Menu.Item>Connect account</Menu.Item>
    </Menu>
  );
};
