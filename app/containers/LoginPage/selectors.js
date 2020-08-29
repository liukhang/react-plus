import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate,
  );

const makeSelectloginStatus = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.loginStatus,
  );

export default makeSelectLoginPage;
export { selectLoginPageDomain, makeSelectloginStatus };
