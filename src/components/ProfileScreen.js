import React from 'react';
import Nav from './Nav';

const ProfileScreen = () => {
    return (
        <div className='bg-black h-screen text-white'>
            <Nav />
            <div className='absolute top-[20%] w-full'>
                <div className='w-[40%] mr-auto ml-auto'>
                    <h1 className='text-4xl border-b border-gray-800 pb-1'>Edit Profile</h1>
                    <div className='mt-2 flex gap-3'>
                        <img className='max-w-11 max-h-14 basis-[10%] shrink-[18]' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                        <div className='basis-[90%]'>
                            <p className='bg-gray-600 p-2 rounded-sm'>sony@gmail.com</p>
                            <h3 className='border-b border-gray-800 pb-2 mt-2'>Plans (Current Plan: premium)</h3>
                            <p className='text-sm text-gray-300 mt-2'>Renewal Date: 20/02/2022</p>
                            <div className='p-5'>
                                <div className='flex justify-between mb-5'>
                                    <div className='text-gray-300'>
                                    <h3 className='text-sm'>Netflix Standard</h3>
                                    <p className='text-xs'>1080p</p>
                                    </div>
                                    <button className='bg-[#e50914] px-3 py-1 rounded-sm'>Subscribe</button>
                                </div>
                                <div className='flex justify-between mb-5'>
                                    <div className='text-gray-300'>
                                    <h3 className='text-sm'>Netflix Standard</h3>
                                    <p className='text-xs'>1080p</p>
                                    </div>
                                    <button className='bg-[#e50914] px-3 py-1 rounded-sm'>Subscribe</button>
                                </div>
                                <div className='flex justify-between mb-5'>
                                    <div className='text-gray-300'>
                                    <h3 className='text-sm'>Netflix Standard</h3>
                                    <p className='text-xs'>1080p</p>
                                    </div>
                                    <button className='bg-[#e50914] px-3 py-1 rounded-sm'>Subscribe</button>
                                </div>
                            </div>
                            <button className='bg-[#e50914] px-3 py-1 rounded-sm w-full'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;