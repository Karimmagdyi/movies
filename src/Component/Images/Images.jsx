import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Images({layer,setLayer}) {
useEffect(()=>{
    getPopularMovies()
},[])
    const [movies, setMovies] = useState([])

    function getPopularMovies(){
        axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
              }
        })
        .then((res)=>{
           console.log('popular',res.data.results);
           setMovies(res.data.results) 
        })
        .catch((err)=>{
console.log('err',err);
        })
    }

    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        

      };
  return <>

  {layer===true? <div className='d-none'></div>:<Slider {...settings}>
        {movies.map((movies,index)=> <div  key={index} className=' position-relative'>
           <img className="w-100 " height={700} src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.title} />
           <div className="zz d-flex flex-column justify-content-center align-items-start ps-5 pb-5 text-white">
          <p className='ps-5 fw-bolder  display-5'>{movies.title}</p>
          <span className='ps-5  display-5 mt-5  fw-bolder'>With <span className='text-danger'>Movlify</span></span>
          <span className='ps-5 fs-4 pt-4'>Stop searching for free movie websites and watch </span>
          <span className='ps-5 fs-4 pb-4'>Movlify now.</span>
      </div>
           
             </div>)}
  </Slider>}
  
  </>
}
