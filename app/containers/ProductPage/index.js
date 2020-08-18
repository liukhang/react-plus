/**
 *
 * ProductPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ProductPage() {
  useInjectReducer({ key: 'productPage', reducer });
  useInjectSaga({ key: 'productPage', saga });

  return (
    <div>
      <Helmet>
        <title>ProductPage</title>
        <meta name="description" content="Description of ProductPage" />
      </Helmet>
      <h1>Products</h1>
    </div>
  );
}

ProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productPage: makeSelectProductPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductPage);
