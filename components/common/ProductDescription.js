import { useContext, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import ProductModal from '../../components/common/ProductModal';
import AuthContext from '../../store/auth-context'
import classes from './ProductDescription.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDescription = ({ product, onClose, show, discount }) => {
    return (
        <ProductModal
            key={product.id}
            onClose={onClose}
            show={show}>
            <div className="row">
                <div className="col-lg-5 text-center border-end">
                    <Carousel height="80vh">
                        {product.images.map((image) => {
                            return (
                                <div>
                                    <img src={image}/>
                                </div>)
                        })}
                    </Carousel>
                </div>
                <div className={`col-lg-6 p-3 ${classes.desc}`}>
                    <div><img src={`./${product.store}.png`} width='100px'/></div>
                    <div className={classes.name}>{product.name}</div>
                    <div>
                        <span className="fs-2 fw-bold">₹{product.price}</span>
                        <span className="fs-4 text-decoration-line-through">  ₹{product.cutPrice}</span>
                        <span className="fs-4 product-offer"> {discount}% Off</span>
                    </div>
                    <div className="py-2">
                        {!!product.rating ? <span className="fs-5 product-rating"> {parseFloat(product.rating).toFixed(2)} ★ </span> : null}
                        {!!product.noofreviews ? <span className="fs-5 product-review">({product.noofreviews})</span> : null}
                    </div>
                    <div className="pt-2">
                        <div className=" d-inline-block w-50 px-2">
                            <AddToWish product={product} />
                        </div>
                        <div className=" d-inline-block w-50 px-2">
                            <button className="btn btn-dark w-100 " onClick={() => { window.open(product.url) }} target="_blank">Go to Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </ProductModal>
    )
}
const AddToWish = ({ product }) => {
    const [wishList, setWishlist] = useState(false);
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const addToWish = async (e) => {
        e.preventDefault();
        if (!wishList && authContext.isLoggedIn) {
            const res = await fetch('http://localhost:5000/user/wishlist/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    item: product
                })
            }).then(async (res) => {
                const data = await res.json();
                if (data.auth && data.status) {
                    console.log('added');
                    setWishlist(true)
                } else {
                    console.log(data.msg);
                    setWishlist(true)
                    e.preventDefault()
                }
            }).catch(err => {
                console.log(err);
            })
        } else {
            if (!authContext.isLoggedIn) {
                router.push('/login')
            }
        }
    }
    return <button className="btn btn-outline-dark w-100" onClick={addToWish}>{wishList ? `❤️Wishlisted` : `🤍WishList`}</button>
}
export default ProductDescription;