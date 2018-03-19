import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Header,
  Button,
  Progress,
  Table
} from 'semantic-ui-react';
import { getWeb3Async } from '../util/web3';
import { keccak256 } from 'js-sha3';

/* Smart Contract Utils not Apps */
import { default as DatabaseUtil } from './contracts/DatabaseUtil';
import { default as HashFunctionsUtil } from './contracts/HashFunctionsUtil';
import { default as AssetCreationUtil } from './contracts/AssetCreationUtil';

import FundingHubUtil from './contracts/FundingHubUtil';

/* APIs */
import UpholdApi from '../apis/uphold';
import CoinbaseApi from '../apis/coinbase';

/* Images  */
import Accounts from './Accounts';
import asset from '../images/bitcoin-atm.png';
import metamaskAccount from '../images/metamask-account.png';

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      isWeb3synced: false,
      assetID: null
    };
  }

  async componentDidMount() {
    const web3 = await getWeb3Async();
    if (web3.isConnected()) {
      const assetID =
        '0xc1df9153411d6a4e91c75c8e0a4aa44d3993683a6ab89841f99f14dcde920048';
      const dbInstance = new DatabaseUtil();
      const fundingHubInstance = new FundingHubUtil();
      const hashFunctionsInstance = new HashFunctionsUtil();
      const assetCreationInstance = new AssetCreationUtil();
      console.log('assetID; ', assetID);
      await dbInstance.load(web3);
      await hashFunctionsInstance.load(web3);
      await fundingHubInstance.load(web3, assetID);
      await assetCreationInstance.load(web3, assetID);

      const amountRaised = web3.fromWei(
        await dbInstance.uintStored(
          await hashFunctionsInstance.stringBytes('amountRaised', assetID)
        ),
        'ether'
      );
      const fundingDeadline = parseInt(
        await dbInstance.uintStored(
          await hashFunctionsInstance.stringBytes('fundingDeadline', assetID)
        )
      );
      const humanReadableDate = new Date(fundingDeadline * 1000).toString();
      const amountToBeRaised = web3.fromWei(
        await dbInstance.uintStored(
          await hashFunctionsInstance.stringBytes('amountToBeRaised', assetID)
        ),
        'ether'
      );
      const percentageBar = amountRaised / amountToBeRaised * 100;

      this.setState({
        web3: web3,
        isWeb3synced: true,
        assetID: assetID,
        amountRaised: amountRaised,
        fundingDeadline: fundingDeadline,
        amountToBeRaised: amountToBeRaised,
        percentageBar: percentageBar,
        humanReadableDate: humanReadableDate
      });
      // Fixed assetID for testing
      // Currently not a real assetID
    }
  }

  render() {
    const {
      web3,
      isWeb3synced,
      amountRaised,
      fundingDeadline,
      amountToBeRaised,
      percentageBar,
      assetID,
      humanReadableDate
    } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="centered" width={4}>
            <Image
              src={asset}
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
            />
            <Button
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                marginTop: '5px'
              }}
            >
              Contribute{' '}
              {/* fundingHubInstance.fund(assetID, grabValueFromField)*/}
            </Button>
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row className="stretched collapsed">
                <Grid.Column width={16}>
                  <Segment.Group horizontal>
                    <Segment style={{ width: '65%' }}>
                      <Header as="h4">Bitcoin ATM *test*</Header>
                      <Header as="h5">
                        Specifications
                        <Header.Subheader>
                          Lamassu Bitcoin ATM/Buy Only.
                        </Header.Subheader>
                      </Header>
                      <Header as="h5">Description</Header>
                      <p>
                        Our machines represent is the man on the street, the guy
                        who just wants to put in $10 in bitcoin or $200 in
                        bitcoin. We didn't know what to expect, there's always a
                        question mark until you realize that your operators are
                        actually profitable and that this is a service that can
                        really work.
                      </p>
                      <Header as="h5">User Account</Header>
                      <Grid container>
                        <Grid.Row>
                          <Grid.Column width={4}>
                            <Segment compact>
                              <Image src={metamaskAccount} />
                              {isWeb3synced && web3.eth.coinbase}
                            </Segment>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                    <Segment style={{ width: '35%' }}>
                      <Grid container>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <Header as="h5">Total Asset Breakdown</Header>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Asset Cost</Grid.Column>
                          <Grid.Column width={6}>
                            <b>{isWeb3synced && amountToBeRaised}</b>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Maintenance Fee</Grid.Column>
                          <Grid.Column width={6}>
                            <b>0.1 ETH/m</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <Header as="h5">Asset Revenue Breakdown</Header>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Breakeven</Grid.Column>
                          <Grid.Column width={6}>
                            <b>5 Months</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>
                            Return of investment
                          </Grid.Column>
                          <Grid.Column width={6}>
                            <b>18%/Year</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>
                            Total Asset Revenue
                          </Grid.Column>
                          <Grid.Column width={6}>
                            <b>2.3 ETH/m</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <Header as="h5">Detailed Information</Header>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Asset ID</Grid.Column>
                          <Grid.Column width={6}>
                            <b>{assetID}</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Installer</Grid.Column>
                          <Grid.Column width={6}>
                            <b>
                              {isWeb3synced && 'x0x0'}
                              {/*TODO; need to grab from bigchaindb  */}
                            </b>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="stretched collapsed">
                <Grid.Column width={16}>
                  <Segment.Group>
                    <Segment.Group horizontal>
                      <Segment>
                        {' '}
                        Current funding:
                        <b>{isWeb3synced && amountRaised}</b>
                      </Segment>
                      <Segment>
                        {' '}
                        Funding period ends on{' '}
                        {isWeb3synced && humanReadableDate}{' '}
                      </Segment>
                      <Segment>
                        {' '}
                        Funding Goal: <b>{isWeb3synced && amountToBeRaised}</b>
                      </Segment>
                    </Segment.Group>
                    <Segment>
                      <Progress
                        style={{ margin: '0' }}
                        progress
                        percent={isWeb3synced && percentageBar}
                        color="blue"
                      />
                    </Segment>
                    <Segment textAlign="right">
                      Total Contributors:
                      <b>50</b>
                      {/* TODO; need to grab from bigchaindb */}
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
