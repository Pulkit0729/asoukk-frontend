import PriceFilter from "../common/Filter/PriceFilter";
import StoreFilter from '../common/Filter/StoreFilter';
import classes from './Vertical.module.css'
const FilterColumn = () => {

    return (
        <div className="flex-column w-25 d-inline-block border-end only-desktop">
            <div className={classes['vertical-filter']}>
                <span className={classes.heading}>filters</span>
            </div>
            <PriceFilter/>
            <StoreFilter></StoreFilter>
        </div>
    )
}



export default FilterColumn;