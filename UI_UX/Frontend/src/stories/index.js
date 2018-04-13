import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'carbon-components/css/carbon-components.min.css';
import 'gridlex/dist/gridlex.min.css';
import '../styles/index.css';

import { AppHeader } from '../components/AppHeader';
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
import { AppSidebar } from '../components/AppSidebar';
import { Achievements } from '../components/Achievements';

storiesOf('Sidebar', module)
  .addDecorator(story => (
    <div className="grid" style={{ width: '100%', height: '100vh' }}>
      {story()}
    </div>
  ))
  .add('view', () => {
    return <AppSidebar clickHandler={action('Clicked nav button')} />;
  });

storiesOf('Header', module)
  .add('Normal view', () => (
    <AppHeader
      loadingBalance={false}
      exchangeRate={2.13}
      myBitBalance={215}
      loadingAccountInfo={false}
      ethBalance={20}
      address="0xde0BF ..."
    />
  ))
  .add('Loading', () => (
    <AppHeader
      loadingBalance={true}
      exchangeRate={-1}
      myBitBalance={0}
      loadingAccountInfo={true}
      ethBalance={0}
      address=""
    />
  ));

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

const achievements = [
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  },
  {
    title: 'Q4 2016',
    description: 'idea conceived'
  }
];

storiesOf('Achievements', module).add('view', () => (
  <Achievements achievements={achievements} />
));
