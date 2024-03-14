import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function PopularActors() {
 const [actor, setActor] = useState([])

 
useEffect(()=>{
    getActors()
},[])

    function getActors(){
        axios.get(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
              }
        })
        .then((res)=>{
        console.log('actors',res.data.results);
        setActor(res.data.results)
        })
        .catch((err)=>{
console.log('actors err',err);
        })
    }

  return <>
  <div className='bg-black min-vh-100 pt-6'>

 

  <div className="container">
  <h3 className='text-white'>Popular Actors</h3>
    <div className="row gy-3">
    {actor.map((actor,index)=><div key={index} className="col-6 col-md-3">
        <Link className='text-decoration-none' to={`/ActorsDetails/${actor.id}${actor.profile_path}`}>
        <div className="card ">
       <img className='card-img-top ' height={300} src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="" />
        <div className="card-body pt-3 bg-black">
    <h5 className='text-white'>{actor.name}</h5>

    <h6 className='text-info'>{actor.known_for_department}</h6>
    
</div>
        </div>
        </Link>
        </div> )}
    </div>
  </div>
  </div>
  </>
}



// {actor.map((actor,idx)=><> <div className='col-2'>
// <div className="img">
// <img className='w-100 ' height={100} src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
// </div>
// </div>
// <div className="col-10">
//   <div className="info-about">
//   <h5 className='text-white'>{actor.name}</h5>

// <h6 className='text-info'>{actor.known_for_department}</h6>
//   </div>
// </div>
// </>)}