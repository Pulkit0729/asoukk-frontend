import { Fragment } from 'react';
import classes from './Footer.module.css'
import Link from 'next/link';
const Footer = () => {
  return (
    <Fragment>
    <footer className={`container-fluid bg-dark ${classes.footer} mt-5 border-top`}>
      <div className="row px-5 pt-5">
        <div className="col-lg-6">
          <ul>
            <li><Link href='/about'><a className={`${classes['footer-link']}`}>About Us</a></Link></li>
            <li><Link href='/about'><a className={`${classes['footer-link']}`}>Disclaimer</a></Link></li>
            <li><Link href='/privacy'><a className={`${classes['footer-link']}`}>Privacy Policy</a></Link></li>
            <li><Link href='/termsncondition'><a className={`${classes['footer-link']}`}>T&C</a></Link></li>
          </ul>
        </div>
        <div className="col-lg-6">
        <img src="/logo.png" width={100}/>
        </div>
      </div>
    </footer>
  </Fragment>
  )
}
export default Footer;
