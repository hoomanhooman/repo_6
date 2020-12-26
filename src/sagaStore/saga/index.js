import {put, call, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import actions from '../action/vendorAction';

function* getVendors(page,pageSize){
    const res= yield call(axios.get,`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${pageSize}`);
    yield put(actions.getVendorSuccess(res.data.data.finalResult))
}