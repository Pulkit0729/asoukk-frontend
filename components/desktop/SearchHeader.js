import {useRouter} from 'next/router';
import classes from './SearchHeader.module.css'

const SearchHeader = ({searchData}) => {
    const router = useRouter();

    function Sort(e){
        const sort= e.target.value;
        router.push(`/search?search=${searchData.query}&sort=${sort}`)
    }

    function SortLabel(sort){
        switch(sort){
            case 'asc':
                return ' Price Low to High'
            case 'desc':
                return ' Price High to Low'
            default:
                return ' Recommended'
        }
    }

    return (
        <div className="border-bottom py-2 d-flex only-desktop">
            <span >Showing Results for <span className='fw-bold'>{searchData.query}</span></span>
            <div className={`sort-by ms-auto my-1 me-1 d-flex ${classes.dropdown} `}>
                Sort by:
                <span className='ps-1'>{searchData.sort != null ? SortLabel(searchData.sort) : ' Recommended'}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                <ul className={classes['sort-list']} >
                    <li>
                        <label>
                            <input type='radio' value='rec' onClick={Sort}></input>Recommended</label>
                    </li>
                    <li>
                        <label>
                            <input type='radio' value='asc' onClick={Sort}></input>Price low to high</label>
                    </li>
                    <li>
                        <label>
                            <input type='radio' value='desc' onClick={Sort}></input>Price high to low</label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchHeader;