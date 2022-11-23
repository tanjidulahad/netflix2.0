import React, { useEffect, useState } from 'react';

const Nav = () => {
    const [show,setShowbg]=useState(false)

    const handleShow=()=>{
        if(window.scrollY>30){
            setShowbg(true)
        }else{
            setShowbg(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleShow)
    },[])
    return (
        <div className={`fixed top-0 ${show && 'bg-black'} w-full p-[40px] z-[1] ease-in duration-300`}>
            <div className='flex justify-between'>
            <img className='w-[120px] fixed left-0 top-1' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img className='w-[40px] h-[40px] mt-[12px] fixed right-3 top-2' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    );
};

export default Nav;