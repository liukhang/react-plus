import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import apiCaller from './api/apiCaller';

export function* getListProduct() {
  try {
    const products = yield call(apiCaller, 'GET', 'products');
    // localStorage.setItem("auth_token", response.data.auth_token);
    yield put({
      type: "PRODUCT_FETCH_SUCCEEDED",
      payloads: products.data
    });
  } catch (err) {
    yield put({
      type: "PRODUCT_FETCH_ERROR",
      payloads: err
    });
  }
}

export default function* productPageSaga() {
  yield takeEvery("PRODUCT_FETCH_REQUESTED", getListProduct);
}