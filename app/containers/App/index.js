/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import ProductDetailPage from 'containers/ProductDetailPage/Loadable';

import GlobalStyle from '../../global-styles';
import {createStructuredSelector} from "reselect";
import {makeSelectloginStatus} from "../LoginPage/selectors";
import { connect } from 'react-redux';
import { LOGOUT_ACTION} from "../LoginPage/constants";

function App(props) {

  const logout = () => {
    props.logout();
  }

  return (
    <div>
      <header>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Product
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </li>

          {props.loginStatus ?
            <li className="nav-item ml-auto">
              <button className="btn btn-primary float-left mt-3" onClick={logout}>Logout</button>
            </li>
            : <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          }
        </ul>
      </header>
      <div className="container">
        <div className="row">
          <Switch>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/products">
              <ProductPage />
            </Route>
            <Route exact path="/products/:id">
              <ProductDetailPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
          <GlobalStyle />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch({
        type: LOGOUT_ACTION,
      });
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  loginStatus: makeSelectloginStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
