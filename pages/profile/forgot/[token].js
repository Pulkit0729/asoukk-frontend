import {useRouter} from 'next/router'
import {useEffect, useState, useRef} from 'react'
import Link from 'next/link'
import LoginLayout from '../../../components/layout/LoginLayout'
import InputComp from '../../../components/widgets/FormImput'
const ResetPassword = () =>{
    const router = useRouter();
    const error = useRef(null);
    const [state, setState] = useState('loading');
    const jwtToken = router.query.token;

    async function onSubmit(e){
        e.preventDefault();
        error.current.innerHTML =null;
        if(e.target.Password.value == e.target['Re-Password'].value){
            const res = await fetch(
                `http://localhost:5000/user/login/recover/reset/${jwtToken}`,
                {
                  body: JSON.stringify({
                    password: e.target.Password.value,
                  }),
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'POST'
                }
              )
              const result = await res.json()
              if(res.status === 200 && result.success){
                  console.log('sucessfully created');
                  router.push({pathname:'/login'})
              }else{
                  alert(result.message)
                  console.log('error creating');
            }
        }else{
            error.current.innerHTML = 'Passwords do not match'
        }

            }

    useEffect(async() => {
        const rs = await fetch(`http://localhost:5000/user/verify/recover/${jwtToken}`)
        .then(async(res)=>{
            const data = await res.json();
            if(data.success){
                console.log('Verify');
            setState('exist');

            }else{
                console.log('session expired');
            setState('error');

            }
        }).catch((err)=>{
            console.log(err);
            setState('error');
        });
    }, [])
    return(
        state=='loading'?null:
        state=='exist'?
        <LoginLayout>
            <form onSubmit={onSubmit}>
                    <h1 class="my-5">Create Password</h1>
                    <InputComp title="Password" type="password" />
                    <InputComp title="Re-Password" type="password"/>
                    <p ref={error}/>
                    <div>
                        <button class="sign-in mx-auto my-1">
                            Continue
                        </button>
                    </div>
                </form>
        </LoginLayout>

        :<LoginLayout>
            <div>The link has been expired. Please try again.</div>
            <Link href='/login/recover'>Forgot Password?</Link>
        </LoginLayout>
    )
}
export default ResetPassword;