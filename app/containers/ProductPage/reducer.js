/*
 *
 * ProductPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  products: []
};

/* eslint-disable default-case, no-param-reassign */
const productPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_FETCH_ERROR':
      // console.log(action.payloads);
      return {
        ...state,
        error: action.payloads
      }
    case 'PRODUCT_FETCH_SUCCEEDED':
      // console.log(action.payloads);
      return {
        ...state,
        products: action.payloads
      }
    default:
      return { ...state };
  }
}

export default productPageReducer;
