import types from '../types';

const defaultState={data:[]};

const vendorReducer=(state=defaultState,action)=>{
    switch(action.type){
        case types.GET_VENDORS_REQUEST:
            return {
                ...state,
                loading : true,
                error:'',
            };
        case types.GET_VENDORS_SUCCESS:
            return {
                ...state,
                loading : false,
                error:'',
                data: [...state.data,...action.data],
            };
        case types.GET_VENDORS_FINISHED:
            return{
                ...state,
                loading : false,
                error:'',
            }
        case types.GET_VENDORS_FAILED:
            return {
                ...state,
                loading : false,
                error:'Loading vendors failed!',
            }
        default:
            return state;
    }
}

export default vendorReducer;