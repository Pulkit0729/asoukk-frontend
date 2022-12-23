const LoginLayout = ({children}) => {
    return(
        <div className="background">
            <div className="wrap-login my-3 px-5 py-4 mx-1">
                {children}
            </div>
        </div>
    )
}

export default LoginLayout;