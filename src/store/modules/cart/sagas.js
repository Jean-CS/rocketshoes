import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

function* addToCart({ payload }) {
  const res = yield call(api.get, `/products/${payload}`);

  yield put(addToCartSuccess(res.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/**
 * takeLatest()
 *  - If the user clicks the same button 3 times in a row and the request has not finished, `redux-saga` will ignore it
 *
 */
