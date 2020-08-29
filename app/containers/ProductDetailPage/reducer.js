/*
 *
 * ProductDetailPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  product: []
};

/* eslint-disable default-case, no-param-reassign */
const productDetailPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case 'GET_PRODUCT_DETAIL_ERROR':
        // console.log(action.payloads);
        return {
          ...state,
          error: action.payloads
        }
      case 'GET_PRODUCT_DETAIL_SUCCEEDED':
        // console.log(action.payloads);
        return {
          ...state,
          product: action.payloads
        }
      default:
        return { ...state };
    }
  });

export default productDetailPageReducer;
