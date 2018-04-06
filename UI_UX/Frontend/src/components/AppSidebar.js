import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import '../styles/AppSidebar.css';

export const AppSidebar = () => {
  const menuOptions = [
    { name: 'Explore' },
    { name: 'List Asset' },
    { name: 'Saved Assets' },
    { name: 'My Portfolio' },
    { name: 'Staking' },
    { name: 'Exchange Asset' },
    { name: 'Transaction History' },
    { name: 'FAQ & Tutorials' }
  ];
  const sidebarMenu = menuOptions.map(menuItem => (
    <Menu.Item style={{ color: 'white' }} className="AppSidebar__menu-item">
      {menuItem.name}
    </Menu.Item>
  ));
  return (
    <Grid.Column
      width={3}
      style={{
        backgroundColor: '#200344',
        position: 'fixed',
        top: '74px',
        left: '0',
        bottom: '0',
        padding: '0'
      }}
    >
      <Menu secondary fluid vertical className="AppSidebar__menu">
        {sidebarMenu}
      </Menu>
    </Grid.Column>
  );
};
