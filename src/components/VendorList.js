import VendorCard from './VendorCard';
import '../styles/VendorList.css';

const VendorList=(props)=>{
    return (
        <div className='vendor-list'>
            { 
                props.vendors.map(vendor=>(
                    <VendorCard key={vendor.data.id} 
                        image={vendor.data.defLogo}
                        imageCaption={vendor.data.costsForTwo}
                        title={
                            vendor.data.cuisinesArray && 
                                        vendor.data.cuisinesArray
                                        .map(detail=>detail.title)
                                        .slice(0,3).join(', ')
                        }
                        detail={vendor.data.area}
                        description={vendor.data.address}
                    />
                ))
            }
        </div>
    )   
}

export default VendorList;