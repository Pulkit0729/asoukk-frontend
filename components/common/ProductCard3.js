import { Fragment, useState } from "react";
import ProductDescription from "./ProductDescription";
import CommonCard from './CommonCard'

//Wishlist//
const ProductCard3 = ({ product, onRemove }) => {
    const [showModal, setShowModal] = useState(false);

    var sp = parseInt(product.price.toString().replace(',', ''));
    var mrp = parseInt(product.cutPrice.toString().replace(',', ''));
    var discount = parseInt(100 * (mrp - sp) / mrp);
    return (
        <Fragment>
            <ProductDescription
                onClose={() => setShowModal(false)}
                show={showModal}
                product={product} />

            <div className="col-lg-3 col-sm-6 col-6 d-flex product3 py-1">
                    <div className="border product3-wraper">
                        <div onClick={(e) => { onRemove(e, product) }} className="item-remove">
                            <span>X</span>
                        </div>
                        <div onClick={() => setShowModal(true)} >
                            <CommonCard product={product} discount={discount} ></CommonCard>
                            <button className="only-mobile btn btn-dark w-100" onClick={() => window.open(product.url)}>Visit Store</button>
                            <div className="product-store">
                                <img src={`./${product.store}.png`}></img>
                                <a target='_blank' href={product.url}>Visit Store</a>
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}

export default ProductCard3;