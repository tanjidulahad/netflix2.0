import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [show,setShowbg]=useState(false)
    const navigate=useNavigate()

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
            <img onClick={()=>navigate('/')} className='w-[120px] fixed left-0 top-1 cursor-pointer' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img onClick={()=>navigate('/profile')} className='w-[40px] h-[40px] mt-[12px] fixed right-3 top-2 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    );
};

export default Nav;