import { Fragment, useState, useRef, useContext } from 'react';
import classes from './Filter.module.css'
import StoreContext from '../../../store/store-context'

const StoreFilter = () => {
    const storeContext = useContext(StoreContext);
    const WebList = ['amazon', 'flipkart', 'myntra', 'snapdeal', 'ajio', 'tatacliq']
    return (
        <Fragment>
            <div className={`${classes['vertical-filter']} ${classes.store}`}>
                <span className={classes.heading}>Stores</span>
                {WebList.map((e) => {
                    return <label> <input type="radio" id={e} value={e} onClick={storeContext.selectHandler} checked={storeContext.selectedStore.includes(e)}/>{e[0].toUpperCase() + e.substring(1)}</label>
                })}
            </div>
        </Fragment>
    )
}
export default StoreFilter;
