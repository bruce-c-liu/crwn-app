import React from 'react';
import { connect } from 'react-redux';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <MenuItem {...section} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);
