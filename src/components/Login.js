import React, { useState } from 'react';
import SignUp from './SignUp';

const Login = () => {
    const [signUpScreen, setSignUpScreen] = useState(false)
    return (
        <div>
            <div className='flex justify-between bg-[url("https://external-preview.redd.it/B6MrrY-dyD1lnvvrb2BCISx1xQwGx-e7pjm-qeXwAkE.jpg?auto=webp&s=ade83a5a759042ffed5324e5172c9a59a27aaaa9")] object-contain bg-center bg-no-repeat relative'>
                <img className='h-[70px] fixed left-0' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                {!signUpScreen && <button onClick={()=>setSignUpScreen(true)} className='bg-[#e50914] h-10 w-20 mt-4 mr-2 font-bold text-white fixed right-0'>Sign In</button>}
                <div className='w-full h-screen bg-[rgba(0,0,0,0.4)]'></div>
            </div>
            <div className='absolute top-[30%] text-white text-center w-full'>
                {
                    signUpScreen ?
                        <SignUp />
                        :
                        <>
                            <h1 className='text-5xl'>Unlimited films, TV programmes and more.</h1>
                            <h2 className='text-2xl mt-4'>Watch anywhere, Cancle at any time</h2>
                            <h3 className='my-3'>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div>
                                <form >
                                    <input className='w-[30%] border-0 outline-none text-black py-2 px-1 rounded-l-sm' type="text" placeholder='Email Address' />
                                    <button onClick={()=>setSignUpScreen(true)} className='bg-[#e50914] py-2 px-3 rounded-r-sm border-0 outline-none'>GET STARTED</button>
                                </form>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Login;