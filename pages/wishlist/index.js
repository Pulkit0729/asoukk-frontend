// import cookies from 'next-cookies';
import { Fragment, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/router'
import ProductCard3 from '../../components/common/ProductCard3';
import AuthContext from '../../store/auth-context';
import classes from './Wishlist.module.css'
import Footer from '../../components/layout/footer/Footer'

const Wishlist = () => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const router = useRouter();
    const authContext = useContext(AuthContext);

    var change = 0;

    async function onRemove (e, product){
        e.preventDefault();
        const res = await fetch('http://localhost:5000/user/wishlist/remove',
            {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ itemId: product.id })
            }
        )
        const data = await res.json();
        if (data.status) {
            console.log('Removed');
            change = change + 1;
            fetchItems();
        } else {
            console.log(data);
            console.log('Erro');
        }

    }
    
    async function fetchItems() {
        if (!authContext.isLoggedIn) {
            console.log('not logged in');
            router.replace('/login')
        } else {
            const res = await fetch('http://localhost:5000/user/wishlist',
                {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Cache': 'no-cache',

                    },
                }
            )
            const data = await res.json();
            setList(data);
            setLoading(false);
        }
    }

    useEffect(async () => {
        fetchItems();
    }, [])


    return (
        loading ? <div>Loading...</div> :
            <Fragment>
                {list.length != 0 ?
                    <div >
                        <h3 className="p-5 only-desktop">My Wishlist</h3>
                        <div className="px-1 row">{
                            list.map((item) => {
                                return (
                                    <ProductCard3 product={item} onRemove={onRemove}></ProductCard3>
                                )
                            })}</div>
                    </div>
                    : <div className={classes.wishlist}>
                        <h2>Your wishlist is empty</h2>
                        <img src="./wish.svg"></img>
                        <button onClick={() => { router.push('/') }} className=" btn btn-outline-dark btn-lg">Shop Now</button>
                    </div>}
                <Footer />
            </Fragment>
    )
}

export default Wishlist;