import types from '../types';
import axios from 'axios';

export const getVendorsRequest=()=>{
    return{type:types.GET_VENDORS_REQUEST};
}

export const getVendorFailed=()=>{
    return{type:types.GET_VENDORS_FAILED}
}

export const getVendorFinished=()=>{
    return {type:types.GET_VENDORS_FINISHED};
}

export const getVendors =(page,pageSize)=>{
    return async dispatch=>{
        dispatch(getVendorsRequest());
        try{
            const res=await axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${pageSize}`);
            const status=!!res.data.status;
            if(status){
                dispatch({
                    type:types.GET_VENDORS_SUCCESS,
                    data:res.data.data.finalResult,
                });
            }
            else{
                dispatch(getVendorFinished());
            }
        }catch{
            dispatch(getVendorFailed());
        }
    }
}
