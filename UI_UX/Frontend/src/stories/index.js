import React from 'react';

import { storiesOf } from '@storybook/react';

import { AppHeader } from '../components/AppHeader';
import { AppSidebar } from '../components/AppSidebar';
import { Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

storiesOf('Sidebar', module).add('view', () => {
  return (
    <Grid>
      <Grid.Row>
        <AppSidebar />
      </Grid.Row>
    </Grid>
  );
});

storiesOf('Header', module).add('view', () => <AppHeader />);
