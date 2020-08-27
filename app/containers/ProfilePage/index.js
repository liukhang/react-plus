/**
 *
 * ProfilePage
 *
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import {makeSelectloginStatus} from '../LoginPage/selectors';
import reducer from './reducer';
import saga from './saga';
import { Route, Redirect } from "react-router-dom";

export function ProfilePage(props) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });

  return (
    <Route>
      {!props.LoginStatus &&
        <Redirect to="/login" />
      }
      <div>
        <Helmet>
          <title>ProfilePage</title>
          <meta name="description" content="Description of ProfilePage" />
        </Helmet>
        <h1>Profile</h1>
      </div>
    </Route>
  );
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
  LoginStatus: makeSelectloginStatus()
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

export default compose(withConnect)(ProfilePage);
