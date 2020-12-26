import {combineReducers} from 'redux';
import vendorReducer from './vendorReducer';

const rootReducer=combineReducers(
    {
        vendors:vendorReducer,
    }
);

export default rootReducer;