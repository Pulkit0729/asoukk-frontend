import InputComp from '../../components/widgets/FormImput';
import {useRef} from 'react'
import { useRouter } from 'next/router'
import LoginLayout from '../../components/layout/LoginLayout'

const formValidate=(e)=>{
    if(e.target.Phone.value.length==10 ){
      if(e.target.Password.value==e.target.Re.value){
        return true;}
        else{
            return 'Passwords do not match';
        }
    }else{
        return 'Invalid phone'}
}
const Register = () => {
    const router = useRouter();
    const error = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const value = formValidate(e)
        if(value==true) {
        const res = await fetch(
            'http://localhost:5000/user/register',
            {
              body: JSON.stringify({
                name: e.target.Name.value,
                email: e.target.Email.value,
                phone: e.target.Phone.value,
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
              router.push({pathname:'/verify', query:{type:'register'}})
          }else{
              alert(result.msg)
              console.log('error creating');
        }}else{
            error.current.innerHTML=value
        }
        }
    return (
        <LoginLayout>
                <form onSubmit={onSubmit}>
                    <h1 className="my-5">Register</h1>
                    <InputComp type="text" title="Name"></InputComp>
                    <InputComp type="email" title="Email"></InputComp>
                    <InputComp type="tel" title="Phone"></InputComp>
                    <InputComp type="password" title="Password"></InputComp>
                    <InputComp type="password" title="Re"></InputComp>
                    <button className="sign-in mx-auto my-1 mb-3">Sign Up</button>
                    <div class="text-danger pt-3" ref={error}/>
                    <p>By creating an account, you agree to our Terms and Conditions.</p>
                </form>
                </LoginLayout>
    )
}
export default Register;

