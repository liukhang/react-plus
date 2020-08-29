/*
 *
 * ProductPage actions
 *
 */

import { PRODUCT_FETCH_REQUESTED } from './constants';

export function getListProduct() {
  return {
    type: PRODUCT_FETCH_REQUESTED
  };
}
