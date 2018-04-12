import React from 'react';
import { Loading } from 'carbon-components-react';

//value = -1 => loading state
export const ExchangeRate = ({ value }) => {
  let loadingIcon = undefined;
  if (value == -1)
    loadingIcon = (
      <Loading
        className="AppHeader_exchange_rate_loading"
        small
        withOverlay={false}
      />
    );
  return (
    <div>
      {loadingIcon}
      <span className="AppHeader_exchange_rate">
        {value == -1 ? `` : `$${value}`} <span className="bold">USD/MYB</span>
      </span>
    </div>
  );
};
