import {Fragment} from 'react';

const CommonCard = ({product, discount}) => {
    return (
        <Fragment>
            <div className="product-image-wrapper">
                <img className="p-2"
                    src={product.images[0]} />
                    </div>
                <a className="product-name">{product.name}</a>
                <div>
                    {!!product.rating?<span className="product-rating"> {parseFloat(product.rating).toFixed(2)} ★ </span>:null}
                    {!!product.noofrevie?<span className="product-review">({product.noofreviews})</span>:null}
                </div>
                <a>
                    <span className="product-price">₹{product.price}</span>
                    
                    <span className="product-mrp  ps-1">₹{product.cutPrice}</span>
                    <span className="product-offer"> {discount}% Off</span>
                </a>
        </Fragment>
    )
}
export default CommonCard;