import {Fragment} from 'react'
import ProductCard2 from '../common/ProductCard2'
const Deals=({className, title, products}) =>{
    // console.log(`called${products}`);
    const Product={
        name: 'Product',
        image: 'https://rukminim1.flixcart.com/image/150/150/kq5iykw0/projector/m/1/x/w5700-w5700-benq-original-imag48cn4bzzgqjs.jpeg?q=70',
        price: '150',
        cutPrice: '200'
    }
    return(
        <div className={`${className} mt-2`}>
            <div className="px-5 pt-5 pb-1 border">
            <h3 >{title}</h3>
            </div>
            <br/>
            <div>
            <div className="row p-4 gx-5">
                {products.map(product =>{
                    return(
                        <ProductCard2 product={product}/>
                    )
                })}
            </div>
            </div>
        </div>
    )
}
export default Deals;