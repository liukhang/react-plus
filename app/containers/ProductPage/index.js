/**
 *
 * ProductPage
 *
 */

import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductPage from './selectors';
import reducer from './reducer';
import { getListProduct } from './actions'
import saga from './saga';
import { Link } from "react-router-dom";

export function ProductPage(props) {
  useInjectReducer({ key: 'productPage', reducer });
  useInjectSaga({ key: 'productPage', saga });

  useEffect(() => {
    props.getProducts()
  }, []);

  const products = props.productPage

  return (
    <div className="container">
      <Helmet>
        <title>Product List</title>
        <meta name="description" content="Description of ProductPage" />
      </Helmet>
      <h1>Products</h1>
      <div className="row">
        {
          products.map(item =>
            (
              <Link key={item.id} to={`/products/${item.id}`} className="col-lg-3 col-md-3">
                <div className="card">
                  <img className="card-img-top" src={item.image} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price} ₫</p>
                    <button className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </Link>
            )
          )
        }
      </div>
    </div >
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
    getProducts: () => {
      dispatch(getListProduct())
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductPage);
