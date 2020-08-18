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

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <header>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
        </ul>
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/products">
            <ProductPage />
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
  );
}
