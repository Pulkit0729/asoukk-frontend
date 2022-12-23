import { useContext, Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AuthContext from '../../store/auth-context'
const ProfileDropDown = () => {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    async function onClick(e) {
        e.preventDefault();
        if (authContext.isLoggedIn) {
            const res = await fetch('http://localhost:5000/user/logout', { credentials: 'include' });
            authContext.logout();
            router.reload();
        } else {
            router.push('/login')
        }
    }
    return (
        <div className="profile-dropdown bg-white">
            <div>
                <div className="dropdown-title">{authContext.isLoggedIn ? `Welcome, ${authContext.name}` : 'Welcome'}</div>
                <div className="dropdown-email">{authContext.isLoggedIn ? authContext.email : 'To access you account'}</div>
                <hr />
                {authContext.isLoggedIn ?
                    <Fragment>
                        <Link href='/wishlist'>
                        <a className="dropdown-email pt-2 d-block">My Wishlist</a>
                        </Link>
                    </Fragment>
                    : null}
            </div>
            <button onClick={onClick} className="btn btn-outline-dark my-3">{authContext.isLoggedIn ? 'Logout' : 'Login/Signup'}</button>
        </div>
    )
}
export default ProfileDropDown;