import React from 'react';

export const NavigationOption = ({ name, clickHandler }) => (
  <div onClick={() => clickHandler(name)} className="AppSidebar__menu-item">
    {name}
  </div>
);
