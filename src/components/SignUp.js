import React from 'react';

const SignUp = () => {
    return (
        <div className='bg-black max-w-[400px] mr-auto ml-auto p-10 rounded-md'>
            <div className='text-left'>
            <h1 className='font-bold text-2xl'>Sign In</h1>
            <div>
                <form >
                    <input className='text-black w-full py-2 outline-none border-0 mt-3 rounded-sm px-2' type="email" placeholder='example@gmail.com'/>
                    <input className='text-black w-full py-2 outline-none border-0 mt-2 rounded-sm px-2' type="password" placeholder='password' />
                    <button className='w-full bg-[#e50914] my-5 py-2 rounded-sm'>Sign In</button>
                </form>
                <h3 className='text-[#777]'>New to Netflix? <span className='text-white cursor-pointer hover:underline'>Sign up now</span></h3>
            </div>
            </div>
        </div>
    );
};

export default SignUp;