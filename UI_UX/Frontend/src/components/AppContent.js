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
import DatabaseUtil from './contracts/DatabaseUtil';
import FundingHubUtil from './contracts/FundingHubUtil';

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
      const databaseInstance = new DatabaseUtil();
      const fundingHubInstance = new FundingHubUtil();
      databaseInstance.load(web3);
      fundingHubInstance.load(web3);
      this.setState({
        web3: web3,
        isWeb3synced: true,
        assetID: 6374856,
        databaseInstance: databaseInstance,
        fundingHubInstance: fundingHubInstance
      });
      // Fixed assetID for testing
      // Currently not a real assetID
    }
  }
  render() {
    const { web3, isWeb3synced, databaseInstance, assetID } = this.state;
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
                            <b>
                              {isWeb3synced &&
                                databaseInstance.uintStorage(
                                  keccak256('amountRaised', assetID)
                                )}
                            </b>
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
                            <b>6374856</b>{' '}
                            {/* TODO; need to grab from bigchaindb */}
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className="stretched collapsed">
                          <Grid.Column width={10}>Installer</Grid.Column>
                          <Grid.Column width={6}>
                            <b>
                              {isWeb3synced &&
                                databaseInstance.bytesStorage(
                                  keccak256('installerID', assetID)
                                )}
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
                        <b>
                          {isWeb3synced &&
                            databaseInstance.uintStorage(
                              keccak256('amountRaised', assetID)
                            )}
                        </b>
                      </Segment>
                      <Segment>
                        {' '}
                        Funding period ends on
                        {isWeb3synced &&
                          new Date(
                            databaseInstance.uintStorage(
                              keccak256('fundingDeadline', assetID)
                            )
                          )}{' '}
                      </Segment>
                      <Segment>
                        {' '}
                        Funding Goal:{' '}
                        <b>
                          {isWeb3synced &&
                            databaseInstance.uintStorage(
                              keccak256('amountToBeRaised', assetID)
                            )}
                        </b>
                      </Segment>
                    </Segment.Group>
                    <Segment>
                      <Progress
                        style={{ margin: '0' }}
                        progress
                        percent={
                          isWeb3synced &&
                          databaseInstance.uintStorage(
                            keccak256('amountRaised', assetID)
                          ) /
                            databaseInstance.uintStorage(
                              keccak256('amountToBeRaised', assetID)
                            ) *
                            100
                        }
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
