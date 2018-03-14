import React, { Component } from 'react';
import { Grid, Header, Menu } from 'semantic-ui-react';
import './App.css';

import { AppHeader } from './components/AppHeader';
import { AppSidebar } from './components/AppSidebar';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Grid>
          <Grid.Row>
            <Grid.Column
              width={4}
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
              width={12}
              style={{
                position: 'fixed',
                top: '74px',
                right: '0',
                padding: '20px'
              }}
            >
              <Grid>
                <Grid.Column width={16}>
                  <Header as="h1">Content</Header>
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
