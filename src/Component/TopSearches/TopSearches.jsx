import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { myApiContext } from '../Context/Context';

export default function TopSearches({layer, setLayer}) {
useEffect(()=>{
  topRatedMovies()
},[])
const [topRated, setTopRated] = useState([])
const{details,similar,movieDetails,provider}=useContext(myApiContext)


function closeLayer(){
  setLayer(false);
}

function clicked(id){
  setLayer(true)
  console.log('id',id);
}
  function topRatedMovies(){

    axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
      }
    })
    .then((res)=>{
console.log('top rated',res.data.results);
setTopRated(res.data.results)
    })
    .catch((err)=>{
console.log('top rated err',err);
    })
  }

  function showDetails(id){
    movieDetails(id)
    clicked(id)
    // handleClick()
  }

  var settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll:1 ,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]

    };


  return <>
  {layer===true?<div className='layer'>
    <div style={{marginLeft:"380px"}} className="d-flex justify-content-center flex-column align-items-center content bg-black w-50"><img className='details-img' width={"600px"} src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}alt="" />
    <h2 className='desc-title text-white'>{details.title}</h2>
    <div className='d-flex information text-white' > 
    <span className='ms-4' >{details.release_date}</span>
    <span className='ms-4'>{details.runtime} min</span>
    <span className='ms-4'><i className="fa-solid fa-star star"></i> {details.vote_average}</span>
    </div>
    <a href={provider.US?.link}>
    <button className='btn btn-outline-danger mt-3' style={{color:'red'}}>watch</button>
    </a>
    <div className="desc text-white mt-5 bg-transparent ps-4">{details.overview}</div>
    <div className="row justify-content-center mt-5 gy-4">
      {similar.map((similar,idx)=> <div key={idx} className=' col-sm-5 '>
        <img onClick={()=>{showDetails(similar.id)}}  width={"250px"} src={`https://image.tmdb.org/t/p/w500/${similar.poster_path || similar.poster_path}}`}alt="" />
        <h6 className='text-white'> {similar.title}</h6>
         </div>)}
    </div>
    </div>
    
    
    <i role='button' onClick={closeLayer} className="fa-solid fa-x fa-xl closeIcon text-white"></i></div> :<div className=''>
      
  <div className="container">
    <div className="row ">
        <h5 className='text-white h4'>Top Rated Movies</h5>
  <Slider {...settings}>
        {topRated.map((movies,index)=> <div  key={index} className='col-md-4 px-2 mb-3'>
           {/* <Link to={`MovieDetails/${movies.id}`}> */}
           <div onClick={()=>{showDetails(movies.id)}} className=' '>
           <img className="w-100 " height={230} src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path || movies.poster_path}`} alt={movies.title} />
              <h5 className='text-center text-white card-title text-decoration-none list-unstyled'>{movies.title}</h5>
           </div>
           {/* </Link> */}
             </div>)}
  </Slider>
    </div>
  </div>
  
  </div>}
  </>
}
