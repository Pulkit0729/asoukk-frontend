import { useRouter } from 'next/router'
import LoginLayout from '../components/layout/LoginLayout';

const Verify = () => {
    const router = useRouter();
    const type = router.query.type;
    return (
        <LoginLayout>
            <h1 class="my-5">{type=='register'?`Verification link send to your email`:'A password reset mail has benn sent'}</h1>
        </LoginLayout>
    )
}

export default Verify;