import { Fragment, useState } from "react";
import ProductDescription from "./ProductDescription";
import CommonCard from './CommonCard'

// HomeScreen  
const ProductCard2 = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    var sp = parseInt(product.price.toString().replace(',', ''));
    var mrp = parseInt(product.cutPrice.toString().replace(',', ''));
    var discount = parseInt(100 * (mrp - sp) / mrp)
    return (
        <Fragment>
            <ProductDescription
                onClose={() => setShowModal(false)}
                show={showModal}
                product={product} />
            <div onClick={() => setShowModal(true)} className="col-lg-2 col-sm-6 col-6 p-1 d-inline-block">
            <CommonCard product={product} discount={discount}></CommonCard>
                <div className="product-store"><img src="./amazon.png"></img></div>
            </div>
        </Fragment>
    )
}

export default ProductCard2;