/**
 *
 * ProductDetailPage
 *
 */
import React, { memo, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductDetailPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { withRouter } from 'react-router';
import { getProductDetail } from './actions'

export function ProductDetailPage(props) {
  useInjectReducer({ key: 'productDetailPage', reducer });
  useInjectSaga({ key: 'productDetailPage', saga });

  let id = props.match.params.id

  useEffect(() => {
    props.fetchProductDetail(id)
  }, []);

  const product = props.productDetailPage

  return (
    <div className="container">
      <Helmet>
        <title>ProductDetailPage</title>
        <meta name="description" content="Description of ProductDetailPage" />
      </Helmet>
      <h1>Product Detail</h1>

      <div className="card product-detail">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="image"><img src={product.image}/></div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{product.name}</h3>
              <div className="rating">
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">{product.description}</p>
              <h4 className="price">price: {product.price}</h4>
              <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
              <div className="action">
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productDetailPage: makeSelectProductDetailPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchProductDetail: (id) => {
      dispatch({
        type: "GET_PRODUCT_DETAIL",
        id: id
      })
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  withRouter
)(ProductDetailPage);
