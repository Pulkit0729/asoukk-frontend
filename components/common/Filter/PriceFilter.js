import {useRef } from 'react';
import classes from './Filter.module.css'
import {useRouter} from 'next/router';

const PriceFilter = () => {
    const router = useRouter();
    const pmin = router.query.prange1;
    const pmax = router.query.prange2;

    const minRef = useRef(pmin);
    const maxRef = useRef(pmax);

    function onSubmit(e){
        if(e.target.min.value!='' && e.target.max.value!=''){
            router.push({
                pathname: '/search',
                query:{
                    ... router.query,
                    prange1:e.target.min.value,
                    prange2:e.target.max.value
                }
            }).then(() =>{
            })
        }else{

        }
    }
    return (
        <div className={`${classes['vertical-filter']} ${classes.price}`}>
            <span className={classes.heading}>Price</span>
            <form className='d-flex' onSubmit={onSubmit}>
                <input placeholder='Min' name='min' ref={minRef} required/>
                <p className='me-2 align-self-center'>to</p>
                <input placeholder='Max' name='max' ref={maxRef} required />
                <button className='d-inline-block btn btn-dark btn-sm ms-2'>Go</button>
            </form>
        </div>
    )

}

export default PriceFilter;