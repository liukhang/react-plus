import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { func } from 'prop-types';
import axios from 'axios';
import {
  DEFAULT_ACTION,
  API_GET_USERS,
  LOGIN_ACTION,
  LOGGED,
} from './constants';

// Individual exports for testing

function* fetchUser(action) {
  const users = yield call(getAllUser);
  const { userName } = action;
  const { password } = action;

  yield all(
    users.map(user => {
      if (user.email === userName && user.password === password) {
        return put({
          type: LOGGED,
        });
      }
    }),
  );
}

export default function* loginPageSaga() {
  yield takeEvery(LOGIN_ACTION, fetchUser);
}

function getAllUser() {
  return axios.get(API_GET_USERS).then(response => response.data);
}
