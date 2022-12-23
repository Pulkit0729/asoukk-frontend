import {useRouter} from 'next/router'
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = (props)=>{
    const router = useRouter();
    
    const onSubmit =(e)=>{
      e.preventDefault();
      e.target.search.value!=''?router.push(`/search?search=${e.target.search.value}`).then(()=>{e.target.search.value= ''}):null;
      
    }
      return (
          <form className={`${props.className} input-group search`} onSubmit={onSubmit}>
              <input name="search" className="form-control" type="search" placeholder="Search" aria-label="Search" required></input>
              <button className="btn btn-outline-secondary search-button" type="submit">
                <SearchIcon></SearchIcon>
                </button>
            </form>
      );
  }

  export default SearchBox;