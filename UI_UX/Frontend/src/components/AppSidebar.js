import React from 'react';
import { Tile } from 'carbon-components-react';
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
    <Tile className="AppSidebar__menu-item">{menuItem.name}</Tile>
  ));

  return <div className="col-4 AppSidebar">{sidebarMenu}</div>;
};
