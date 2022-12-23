import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ProfileDropDown from '../desktop/ProfileDropDown'
import SearchBox from './SearchBox'
import Link from 'next/link'
import AuthContext from '../../store/auth-context'
import {useContext} from 'react'
const NavBar = () => {
  const authContext = useContext(AuthContext);

    return (
        <section className="shadow bg-white">
        <nav className="navbar navbar-expand container-fluid">
          <Link href="/">
            <a className="navbar-brand" >
              <img src="/logo.png" width={40}/>
              ASOUKK</a></Link>
        <SearchBox className="only-desktop mx-auto w-50"></SearchBox>
       <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <div className="profile-icon">
            <div className="nav-icon px-1 py-2">
              <PermIdentityIcon></PermIdentityIcon>
              <span className="only-desktop">Profile</span>
            </div>
            <ProfileDropDown></ProfileDropDown>
            </div>
            </li>
          <li className="nav-item px-1 py-2">
            <Link href={authContext.isLoggedIn ?'/wishlist':'/login'}>
            <div className="nav-icon text-center">
              <a href=''><FavoriteBorderIcon></FavoriteBorderIcon></a>
              <span className="only-desktop"> Wishlist</span>
            </div>
            </Link>
            </li>
        </ul>
      </nav>
      
      <nav className="only-mobile navbar navbar-expand container-fluid ">
          <SearchBox
          className="d-flex w-100"></SearchBox>
      </nav>
    </section>
    );
};


export default NavBar;