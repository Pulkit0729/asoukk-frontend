import { Fragment, useState } from "react";
import ProductDescription from "./ProductDescription";
import CommonCard from "./CommonCard";


// SearchScreen
const ProductCard = ({product}) => {
    const [showModal, setShowModal] = useState(false);
        var sp = parseInt(product.price.toString().replace(',',''));
        var mrp = parseInt(product.cutPrice.toString().replace(',',''));
        var discount = parseInt(100*(mrp-sp)/mrp)

    return (
        <Fragment>
            <ProductDescription
            key={product.id}
                onClose={()=>setShowModal(false)}
                show = {showModal}
                product={product}
                discount={discount}/>
            <div onClick={() => setShowModal(true)} className="col-lg-3 col-6 p-1 d-inline-block border-end">
                <CommonCard product={product} discount={discount}></CommonCard>
            </div>
        </Fragment>
    )
}

export default ProductCard;