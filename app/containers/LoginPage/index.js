/**
 *
 * LoginPage
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLoginPage, { makeSelectloginStatus } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/Login';
import { LOGIN_ACTION } from './constants';
import { Redirect, Route } from "react-router-dom";

export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  const login = (userName, password) => {
    props.login(userName, password);
  };

  if (props.loginStatus) {
    return (
      <Route>
        {!props.LoginStatus &&
        <Redirect to="/profile" />
        }
      </Route>
    )
  }

  return (
    <div>
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
      </div>
        <Login login={login} />
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
  loginStatus: makeSelectloginStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (userName, password) => {
      dispatch({
        type: LOGIN_ACTION,
        userName,
        password,
      });
    },

    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
