import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase.config';

const SignUp = () => {
    const navigate = useNavigate();

    const emailRef = useRef()
    const passwordRef = useRef()

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, emailRef.current.value,
            passwordRef.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/')
                console.log(user)

            })
            .catch((error) => {
                alert(error.message)

            });
    }

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,  emailRef.current.value,
            passwordRef.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/')
                console.log(user)
            })
            .catch((error) => {
                alert(error.message)
            });

    }


    return (
        <div className='bg-black max-w-[400px] mr-auto ml-auto p-10 rounded-md'>
            <div className='text-left'>
                <h1 className='font-bold text-2xl'>Sign In</h1>
                <div>
                    <form >
                        <input ref={emailRef} className='text-black w-full py-2 outline-none border-0 mt-3 rounded-sm px-2' type="email" placeholder='example@gmail.com' />
                        <input ref={passwordRef} className='text-black w-full py-2 outline-none border-0 mt-2 rounded-sm px-2' type="password" placeholder='password' />
                        <button onClick={signIn} className='w-full bg-[#e50914] my-5 py-2 rounded-sm'>Sign In</button>

                        <h3 className='text-[#777]'>New to Netflix? <span onClick={register} className='text-white cursor-pointer hover:underline'>Sign up now</span></h3>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;