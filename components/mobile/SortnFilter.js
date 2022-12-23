import classes from './SortnFilter.module.css';
import { Fragment, useState } from 'react';
import SortDrawer from './SortDrawer'
import FilterDrawer from './FilterDrawer'
const SortFilter = ({searchData}) => {
    const [showSort, setSort] = useState(false);
    const [showFilter, setFilter] = useState(false);
    const [showBottom, setBottom] = useState(true);

    return (
        <Fragment>
            {showBottom?<div className={`fixed-bottom only-mobile ${classes.sortnfilter}`}>
                <div className="w-50 d-inline-block border-end">
                    <button onClick={() => {
                        setSort(true);
                        setBottom(false);
                        }}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort" class="svg-inline--fa fa-sort fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                        SORT
                    </button>
                </div>
                <div className="w-50 d-inline-block">
                    <button onClick={() => {
                        setFilter(true);
                        setBottom(false);
                        }}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" class="svg-inline--fa fa-filter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg>
                        FILTER
                    </button>
                </div>
            </div>:null}
            <SortDrawer
                onClose={() => {
                    setSort(false);
                    setBottom(true);
                }}
                show={showSort}
                searchData={searchData}></SortDrawer>
            <FilterDrawer onClose={
                () => {
                    setFilter(false);
                    setBottom(true);
                }}
                show={showFilter}
                searchData={searchData}
                ></FilterDrawer>
        </Fragment>

    )
}


export default SortFilter;