import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import './styles/App.css';

import { AppHeader } from './components/AppHeader';
import { AppSidebar } from './components/AppSidebar';
import { default as AppContent } from './components/AppContent';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  render() {
    this.props.sendTestAction(false);
    return (
      <div>
        <AppHeader />
        <Grid>
          <Grid.Row>
            <AppSidebar />
            <Grid.Column
              width={13}
              style={{
                position: 'fixed',
                top: '74px',
                right: '0',
                padding: '20px'
              }}
            >
              <Grid>
                <Grid.Column width={16}>
                  <AppContent />
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('printing a variable from redux state: ', state.example.testVar);

  return {
    testVar: state.example.testVar
  };
};

export default connect(mapStateToProps, actions)(App);
