import React, { Component } from 'react';
import { Grid, Image, Header, Menu } from 'semantic-ui-react'
import logo from './images/mybit-logo-white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu
          inverted 
          huge 
          borderless 
          fixed={['left', 'top']} 
          fluid
          style={{ backgroundColor: '#200344' }}>
          
          <Menu.Header
            name='logo'
          >
            <Image width='136px' src={logo} style={{ padding: '10%' }} />
          </Menu.Header>
          
          <Menu.Item>
            Connect account
          </Menu.Item>
        </Menu>
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
              <Menu
                secondary
                fluid
                vertical
              >
                <Menu.Item style={{ color: 'white' }}>
                  Sidebar
                </Menu.Item>
              </Menu>
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
                  <Header as='h1'>Content</Header>
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
