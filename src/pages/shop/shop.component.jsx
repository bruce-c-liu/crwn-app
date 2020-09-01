import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverview />
      </Route>
      <Route exact path={`${match.path}/:collectionName`}>
        <CollectionPage />
      </Route>
    </div>
  );
};

export default withRouter(ShopPage);
