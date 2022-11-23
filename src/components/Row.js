import React, { useEffect, useState } from 'react';
import axios from '../Axios/axios';
import './Row.css'

const Row = ({title,fetchUrl,isLargeRow=false}) => {
    const base_url="https://image.tmdb.org/t/p/original"
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const req= await axios.get(fetchUrl);
            setMovies(req.data.results)
            return req
        }
        fetchData()
    },[fetchUrl])
    console.log(movies)
    return (
        <div className='text-white ml-[20px]'>
            <h2>{title}</h2>
            <div className='hide_scroll p-[20px] flex overflow-y-hidden overflow-x-scroll'>
            {
                movies.map((movie)=>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) &&(
                    <img
                    className={`${isLargeRow ? "max-h-[250px]":"max-h-[100px]"} object-contain mr-[10px] hover:scale-[1.08] hover:opacity-100 duration-150`}
                    src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt="img" />
                ))
            }
            </div>
        </div>
    );
};

export default Row;