import Link from 'next/link'
import {useRef, useContext, useEffect } from 'react'
import { useRouter } from 'next/router';
import AuthContext from '../../store/auth-context'
import InputComp from '../../components/widgets/FormImput'
import LoginLayout from '../../components/layout/LoginLayout'

const Login = () => {
    const authContext = useContext(AuthContext);
    const error = useRef(null);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault()
        const rs = fetch(
            'http://localhost:5000/user/login',
            {
                credentials: 'include', /*important*/
                body: JSON.stringify({
                    email: e.target.Email.value,
                    password: e.target.Password.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }
        ).then(async (res) => {
            const result = await res.json()
            if (res.status === 200 && result.success) {
                authContext.login();
                authContext.updateUser({name:result.user.name, email:result.user.email})
                router.push('/');
            } else {
                var err = result.msg;
                if(err==="e1"){
                    console.log('called');
                    error.current.innerHTML = 'Invalid Password'
                }
                else if(err=='e2'){
                    error.current.innerHTML = 'Invalid  Username'
                }
                else if(err=='e3'){
                    error.current.innerHTML = 'Please confirm your email'
                }
                else{
                    error.current.innerHTML ='Something went wrong'
                }
                console.log(result.msg==="e1");
                console.log('error login');
            }
        }).catch(err => { 
            console.log(err.message) 
        })
    }

    useEffect(() => {
        if(authContext.isLoggedIn){
            console.log('logged in');
            router.replace('/')
        }
    },[])
    return (
        <LoginLayout>
                <form onSubmit={onSubmit}>
                    <h1 class="my-5">Sign In</h1>
                    <InputComp title="Email" />
                    <InputComp title="Password" />
                    <div>
                        <button class="sign-in mx-auto my-1">
                            Sign In
                        </button>
                    </div>
                    <div class="text-danger pt-3" ref={error}/>
                    <span className="text-primary">
                        <Link href='/login/recover'>Forgot Password?</Link></span>
                    <div class="mt-5">
                        <Link href="/register">Don't have an account? Register</Link>
                    </div>
                </form>
                </LoginLayout>
    )
}

export default Login;