import React from 'react';
import { Loading } from 'carbon-components-react';
import Jazzicon from 'react-jazzicon';

export const Address = ({ loadingAccountInfo, address }) => {
  let loadingIcon = undefined;
  if (loadingAccountInfo)
    loadingIcon = (
      <div>
        <Loading
          className="AppHeader_address_loading"
          small
          withOverlay={false}
        />
        <span>Loading account</span>{' '}
      </div>
    );

  return (
    <div className="AppHeader_address">
      {loadingAccountInfo ? (
        loadingIcon
      ) : (
        <div>
          <Jazzicon diameter={39} seed={Math.random(100).toString()} />
          <span>{address}</span>
        </div>
      )}
    </div>
  );
};
