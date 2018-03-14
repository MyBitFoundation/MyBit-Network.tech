import React from 'react';
import { Menu } from 'semantic-ui-react';

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
    <Menu.Item style={{ color: 'white' }}>{menuItem.name}</Menu.Item>
  ));
  return (
    <Menu secondary fluid vertical>
      {sidebarMenu}
    </Menu>
  );
};
