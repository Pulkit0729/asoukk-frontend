import NavBar from "../common/NavBar"
import { Fragment } from "react"
const Layout = (props)=>{
    return(
        <Fragment>
        <NavBar></NavBar>
        <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;