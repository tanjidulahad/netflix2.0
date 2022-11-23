import React, { useEffect, useState } from 'react';
import axios from '../Axios/axios'
import request from '../MovieRequests/request'
import Typed from 'react-typed';

const Banner = () => {
    const [movie, setMovie] = useState({})
    const [desc,setDesc]=useState([])
    const truncate = (text = '', n) => {
        return text.length > n ? text.substr(0, n - 1) + "..." : text
    }
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
            )
            setDesc([truncate(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)].overview, 150)])
        }
        fetchData()
    }, [])
    console.log(movie)
    console.log(desc)
    return (
        <div className="h-[448px] object-contain relative text-white bg-cover" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center"
        }}>
            <div className='pt-[140px] pb-[70px] pl-[20px] h-[330px]'>
                <h2 className='text-5xl pb-2'>{movie?.original_name}</h2>
                <div className='pb-2'>
                    <button className='bg-[rgba(51,51,51,0.5)] px-8 py-2 font-bold mr-2 rounded-[0.2vw] hover:bg-white hover:text-black transition-all duration-200'>Play</button>
                    <button className='bg-[rgba(51,51,51,0.5)] px-8 py-2 font-bold mr-2 rounded-[0.2vw] hover:bg-white hover:text-black transition-all duration-200'>My List</button>
                </div>
                {/* <p className='w-[350px]'>{truncate(movie?.overview, 150)}</p> */}
                <p className='w-[350px]'><Typed
                    loop={false}
                    typeSpeed={20}
                    strings={desc}
                    showCursor={false}
                /></p>
                
            </div>
            <div className='h-[7.4rem]' style={{
                backgroundImage: "linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)"
            }}></div>

        </div>

    );
};

export default Banner;