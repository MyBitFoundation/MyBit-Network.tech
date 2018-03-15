import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import './App.css';

import { AppHeader } from './components/AppHeader';
import { AppSidebar } from './components/AppSidebar';
import { default as AppContent } from './components/AppContent';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Grid>
          <Grid.Row>
            <Grid.Column
              width={3}
              style={{
                backgroundColor: '#200344',
                position: 'fixed',
                top: '74px',
                left: '0',
                bottom: '0',
                padding: '0'
              }}
            >
              <AppSidebar />
            </Grid.Column>
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

export default App;
