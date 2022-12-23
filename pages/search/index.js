import { Fragment, useState, useContext} from 'react';
import FilterColumn from '../../components/desktop/FilterColumn';
import ProductRow from '../../components/desktop/ProductRow';
import Footer from '../../components/layout/footer/Footer'
import SearchHeader from '../../components/desktop/SearchHeader';
import SortFilter from '../../components/mobile/SortnFilter';
import StoreContext from '../../store/store-context';

const SearchScreen = (props) => {
    const storeContext = useContext(StoreContext);
    const selectedStore = storeContext.selectedStore;
    const productList = props.data
    return (
        <Fragment>
            <section className="d-flex flex-row">
                <FilterColumn></FilterColumn>
                <div className="container w-100">
                   <SearchHeader searchData={props.searchData}/>
                    {productList.map((e) => {
                        if (selectedStore.length != 0) {
                            if (selectedStore.includes(Object.keys(e)[0].toLowerCase())) {
                                return (e[Object.keys(e)[0]] != '' && <ProductRow key={Object.keys(e)[0].toLowerCase()} data={e}></ProductRow>)
                            } else { return }
                        } else {
                            return (e[Object.keys(e)[0]] != '' && <ProductRow key={Object.keys(e)[0].toLowerCase()} data={e}></ProductRow>)
                        }

                    })}

                </div>
                <SortFilter searchData={props.searchData}></SortFilter>
            </section>
            <Footer/>
        </Fragment>
        
    )
}

export async function getServerSideProps(context) {
    const searchQuery = context.query.search;
    const sort = context.query.sort!= undefined ? context.query.sort:null;
    console.log(sort);
    const prange1 = context.query.prange1!= undefined ? context.query.prange1:null;
    const prange2 = context.query.prange2!= undefined ?context.query.prange2:null;
    const res = await fetch(`http://localhost:5000/search?query=${searchQuery}&sort=${sort}&prange1=${prange1}&prange2=${prange2}`);
    const data = await res.json();
    return { props: { data: data, searchData: { query: searchQuery, sort: sort, prange1: prange1, prange2: prange2 } } }
}

export default SearchScreen;