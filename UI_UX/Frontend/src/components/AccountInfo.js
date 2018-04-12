import React from 'react';
import { Loading } from 'carbon-components-react';
import { Address } from './Address';

export const AccountInfo = ({
  loadingBalance,
  loadingAccountInfo,
  myBitBalance,
  ethBalance,
  address
}) => {
  let loadingIcon = undefined;
  if (loadingBalance)
    loadingIcon = (
      <Loading
        className="AppHeader_balance_loading"
        small
        withOverlay={false}
      />
    );

  return (
    <div className="AppHeader_account_info">
      <div className="AppHeader_balance">
        <p className="bold">Balance</p>
        {loadingBalance ? (
          loadingIcon
        ) : (
          <span>
            {myBitBalance} <span className="bold">MYB</span> &nbsp; {ethBalance}{' '}
            <span className="bold">ETH</span>
          </span>
        )}
      </div>
      <Address loadingAccountInfo={loadingAccountInfo} address={address} />
    </div>
  );
};
