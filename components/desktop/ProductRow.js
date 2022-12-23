import ProductCard from "../common/ProductCard";
import {Fragment} from 'react'
const ProductRow = ({data}) => {
    const Website = Object.keys(data)[0];
    const products = data[Website];
    return (
        <Fragment>
            <div className="bg-light"><img src={`/${Website}.png`} height="100px" width="200px" className="p-2" /></div>
            <div className="row flex-row flex-nowrap overflow-auto hide-scrollbar border-bottom">
                {products.map(e => (
                    <ProductCard key={e.id} product={e}></ProductCard>
                ))}
            </div>
        </Fragment>
    )
}
export default ProductRow;