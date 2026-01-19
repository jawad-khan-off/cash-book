import React, { useEffect } from 'react'
import { loginWithGoogle } from './lib/auth'
import { account } from './lib/client'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigation = useNavigate();
    useEffect(() => {
        const checkUser = async () => {
            try {
                const user = await account.get()
                if (user.$id) {
                    navigation("/", { replace: true });
                }
            }
            catch (error) {
                console.log("No user logged in", error);
            }
        }
        checkUser();
    }, [navigation]);
    return (
        <section className='h-screen w-full flex items-center justify-center'>
            <button onClick={loginWithGoogle} className='px-6 py-3 bg-blue-600 text-white rounded-md cursor-pointer'>Sign in with Google</button>
        </section>
    )
}

export default SignIn