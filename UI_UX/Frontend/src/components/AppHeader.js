import React from 'react';
import logo from '../images/mybit-logo-white.svg';
import '../styles/AppHeader.css';
import { Logo } from './Logo';
import { ExchangeRate } from './ExchangeRate';
import { AccountInfo } from './AccountInfo';

export const AppHeader = ({
  loadingBalance = false,
  exchangeRate = 2.23,
  myBitBalance = 215,
  loadingAccountInfo = false,
  ethBalance = 20,
  address = '0xde0BF ...'
}) => {
  return (
    <div className="grid AppHeader">
      <Logo className="AppHeader_logo" />
      <ExchangeRate value={exchangeRate} />
      <AccountInfo
        loadingBalance={loadingBalance}
        myBitBalance={myBitBalance}
        ethBalance={ethBalance}
        loadingAccountInfo={loadingAccountInfo}
        address={address}
      />
    </div>
  );
};
