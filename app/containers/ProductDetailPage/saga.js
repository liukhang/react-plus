// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import apiCaller from './api/apiCaller';

export function* getProductDetail(action) {
  try {
    const product = yield call(apiCaller, 'GET', `products/${action.id}`);
    // localStorage.setItem("auth_token", response.data.auth_token);
    yield put({
      type: "GET_PRODUCT_DETAIL_SUCCEEDED",
      payloads: product.data
    });
  } catch (err) {
    yield put({
      type: "GET_PRODUCT_DETAIL_ERROR",
      payloads: err
    });
  }
}

export default function* productDetailPageSaga() {
  yield takeEvery("GET_PRODUCT_DETAIL", getProductDetail);
}