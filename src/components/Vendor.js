import {useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {getVendors} from '../store/actions/vendorAction';
import VendorList from './VendorList';
 import '../styles/Vendor.css';

const Vendor=(props)=>{ 

    const [offset,setOffset]=useState(0);
    const [perPage]=useState(20);

    const getMoreVendors=()=>{
        setOffset(offset=>offset+1);
    }

    useEffect(()=>{
        props.getVendors(offset*perPage,perPage);
    },[offset]);

    useEffect(()=>{ //get more vendors after scrolling down...
        window.addEventListener('scroll', ()=>{
            if (window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight){
                    getMoreVendors();
                }
        });
    },[])

    return(
        <div className='vendor' dir='rtl'>
            {props.vendors && <VendorList vendors={props.vendors.filter(v=>v.type==='VENDOR')}/>}
            {props.loading && <div className='vendor__loading'>Loading</div>}
        </div>
    )
}

const mapStateToProps=state=>({
    vendors:state.vendors.data,
    loading:state.vendors.loading,
    error:state.vendors.error,
});




export default connect(mapStateToProps,{getVendors})(Vendor);