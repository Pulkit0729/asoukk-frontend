import LoginLayout from "../../components/layout/LoginLayout";
import InputComp from "../../components/widgets/FormImput";
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useContext, useRef, useState} from 'react';
import AuthContext from '../../store/auth-context'

const RecoverScreen = () => {
    const authContext = useContext(AuthContext);
    const error = useRef(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    async function onSubmit(e){
        setSuccess(false);
        error.current.innerHTML=null;
        e.preventDefault();
        const rs = fetch(
            'http://localhost:5000/user/login/recover',
            {
                credentials: 'include', /*important*/
                body: JSON.stringify({
                    email: e.target.Email.value,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST'
            }
        ).then(async (res) => {
            const result = await res.json()
            if (res.status === 200 && result.success) {
                //  router.push({pathname:'/verify', query:{type:'recover'}});
                setSuccess(true);
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
                console.log('error login');
            }
        }).catch(err => { 
            console.log(err.message) 
        })
    }
    useEffect(()=>{
        if(authContext.isLoggedIn){
            console.log('logged in');
            router.replace('/')
        }
    },[]);
    return (
        <LoginLayout>
            <form onSubmit={onSubmit}>
                <h3 class="my-5">Forgot Password</h3>
                <p className='text-start mb-1'>Enter your username or email to recover your password. You will receive an email with instructions</p>
                <InputComp title="Email" type="email"/>
               { success?<div class="text-white p-1 bg-success ">An e-mail with instructions to create a new password has been sent to you</div>:null}
                <div>
                    <button class="sign-in mx-auto my-1">
                      Continue
                    </button>
                </div>
                
                <div class="text-danger pt-3" ref={error}/>
                <div class="text-danger pt-3"/>
                    <span className="text-primary">
                        <Link href='/login/recover'>Log in</Link></span>
                    <div>
                        <Link href="/register">Don't have an account? Register</Link>
                    </div>
            </form>
        </LoginLayout>
    )
}

export default RecoverScreen;