import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state,
  {
    match: {
      params: { collectionName },
    },
  }
) => {
  return {
    collection: state.shop.collections[collectionName],
  };
};

export default withRouter(connect(mapStateToProps)(CollectionPage));
