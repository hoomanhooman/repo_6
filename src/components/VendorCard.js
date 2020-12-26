import '../styles/VendorCard.css';

const VendorCard=(props)=>{
    const goToLink=(url)=>{
        if(!!url)
            window.location.replace(url);
    }
    return(
        <section className='card' onClick={()=>goToLink(props.menuUrl)}>
            <div className='card__logo'>
                <img alt='food image'
                    src={props.image}
                    className='card__image'/>
                <div className='card__image-caption'>
                    {`${props.imageCaption}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
                </div>
            </div>
            <div className='card__body'>
                <div className='card__title'>
                    {props.title}
                </div>
                <div className='card__detail'>
                    {props.detail}
                </div>
                <div className='card__description'>
                    {props.description}
                </div>
            </div>
        </section>
    );
}

export default VendorCard;