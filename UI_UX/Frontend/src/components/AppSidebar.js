import React from 'react';
import { Menu } from 'semantic-ui-react';
import './AppSidebar.css';

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
    <Menu secondary fluid vertical className="AppSidebar__menu">
      {sidebarMenu}
    </Menu>
  );
};
