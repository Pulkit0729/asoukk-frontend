
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/category.css'
import '../styles/login.css'
import '../styles/productCard.css'
import '../styles/productList.css'
import '../styles/modal.css'
import { AuthContextProvider } from '../store/auth-context';
import {StoreContextProvider} from '../store/store-context';
import Layout from '../components/layout/Layout'
import Router from 'next/router'
import NProgress from 'nprogress';
import '../styles/nprogress.css'


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </StoreContextProvider>
    </AuthContextProvider>

  )
}

export default MyApp
