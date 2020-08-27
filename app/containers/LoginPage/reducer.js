/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  LOGOUT_ACTION,
  LOGGED,
} from './constants';

export const initialState = {
  loginStatus: false,
};

const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOGGED:
        const newState = {
          ...state,
          loginStatus: true,
        };

        return newState;
      case LOGOUT_ACTION:
        return {
          ...state,
          loginStatus: false,
        };
    }
  });

export default loginPageReducer;
