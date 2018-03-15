import React, { Component } from 'react';

import { parseEtherFromBalance } from '../util/helpers';
import { ARTIFICIAL_DELAY_IN_MS } from '../constants';

class Accounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      accountsMap: {},
      loadingAccounts: false,
      loadingBalance: false
    };
    this.loadBalance = this.loadBalance.bind(this);
  }
  async componentDidMount() {
    const { web3 } = this.props;
    this.setState({ loadingAccounts: true });
    setTimeout(async () => {
      console.log('Loading accounts...');
      const accounts = await web3.eth.getAccountsAsync();
      console.log('Accounts loaded.');
      this.setState({ loadingAccounts: false, accounts: accounts });
    }, ARTIFICIAL_DELAY_IN_MS);
  }
  async loadBalance(account) {
    const { web3 } = this.props;
    this.setState({ loadingBalance: true });
    setTimeout(async () => {
      const balance = await parseEtherFromBalance(
        web3,
        await web3.eth.getBalanceAsync(account)
      );
      const { accountsMap } = this.state;
      console.log('Balance for account', account, balance);
      this.setState({
        loadingBalance: false,
        accountsMap: Object.assign(accountsMap, { [account]: balance })
      });
    }, ARTIFICIAL_DELAY_IN_MS);
  }
  render() {
    return (
      <div>
        {this.state.loadingAccounts && <span>Loading...</span>}
        {this.state.accounts.length > 0 && (
          <div>
            {this.state.accounts.map(account => (
              <pre key={account}>
                Account: {account}
                <br />
                Balance:
                {this.state.loadingBalance
                  ? ' Loading your balance '
                  : this.state.accountsMap[account]
                    ? ` ${this.state.accountsMap[account]} ETH `
                    : ' N/A ETH '}
                <button onClick={() => this.loadBalance(account)}>
                  Get Balance
                </button>
              </pre>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Accounts;
