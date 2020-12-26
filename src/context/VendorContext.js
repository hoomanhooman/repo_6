import {useReducer,createContext} from 'react';
import axios from 'axios';

import Types from '../store/types';

const reducer=(state,action){
    switch(action.type){
        case Types.GET_VENDORS_REQUEST:
            return {
                ...state,
                loading:true,
                error:'',
            }
        case Types.GET_VENDORS_SUCCESS:
            return {
                ...state,
                loading:false,
                error:'',
                data:[...state.data, ...action.data],
            }
        case Types.GET_VENDORS_FAILED:
            return{
                ...state,
                loading:false,
                error:'Can not resolve data from the vendor api',
            }
        case Types.GET_VENDORS_FINISHED:
            return{
                ...state,
                loading:false,
                error:'',
            }
        default:
            throw new Error(`type dismatch (${action.type})`);
    }
}

const fetchVendors=(page, pageSize)=>{
    return async dispach=>{
        dispatch({type:Types.GET_VENDORS_REQUEST});
        try{
            const res=axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=${pageSize}`);
            const status=!!(await res).data.stause;
            if(status){
                return{
                    type:Types.GET_VENDORS_SUCCESS,
                    data:res.data.finalResult,
                }
            }else{
                return{
                    type:Types.GET_VENDORS_FINISHED,
                }
            }
        }catch{
            return{
                type:Types.GET_VENDORS_FAILED,
            }
        }

    }
}