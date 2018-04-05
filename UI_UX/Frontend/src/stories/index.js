import React from 'react';

import { storiesOf } from '@storybook/react';

import { AppHeader } from '../components/AppHeader';
import { AppSidebar } from '../components/AppSidebar';
import { NavigationOption } from '../components/NavigationOption';
import { Address } from '../components/Address';
import { ExplorePage } from '../components/ExplorePage';
import { Category } from '../components/Category';
import { ExploreAssetsPage } from '../components/ExploreAssetsPage';
import { FiltersBar } from '../components/FiltersBar';
import { Button } from '../components/Button';
import { Asset } from '../components/Asset';
import { PortfolioPage } from '../components/PortfolioPage';
import { SmallInfoPanel } from '../components/SmallInfoPanel';
import { TransactionsPage } from '../components/TransactionsPage';
import { TransactionHistory } from '../components/TransactionHistory';
import { Row } from '../components/Row';
import { AssetDetailsPage } from '../components/AssetDetailsPage';
import { AssetHero } from '../components/AssetHero';
import { AssetDetails } from '../components/AssetDetails';
import { AssetFunding } from '../components/AssetFunding';
import { ConfirmationPopup } from '../components/ConfirmationPopup';
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

storiesOf('Explore Page', module).add('view', () => <ExplorePage />);

storiesOf('Explore Assets Page', module).add('view', () => (
  <ExploreAssetsPage />
));

storiesOf('Portfolio Page', module).add('view', () => <PortfolioPage />);

storiesOf('Transactions Page', module).add('view', () => <TransactionsPage />);

storiesOf('Asset Details Page', module).add('view', () => <AssetDetailsPage />);

storiesOf('Address', module).add('view', () => <Address />);

storiesOf('Category', module).add('view', () => <Category />);

storiesOf('Button', module).add('view', () => <Button />);

storiesOf('Asset', module).add('view', () => <Asset />);

storiesOf('Small Info Panel', module).add('view', () => <SmallInfoPanel />);

storiesOf('Asset Hero', module).add('view', () => <AssetHero />);

storiesOf('Asset Details', module).add('view', () => <AssetDetails />);

storiesOf('Asset Funding', module).add('view', () => <AssetFunding />);

storiesOf('Confirmation Popup', module).add('view', () => (
  <ConfirmationPopup />
));

storiesOf('Transaction History', module).add('view', () => (
  <TransactionHistory />
));

storiesOf('Row', module).add('view', () => <Row />);

storiesOf('NavigationOption', module).add('view', () => <NavigationOption />);
