import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
 const {id}= useParams()
//  console.log(id);
//  const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/1096197?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
useEffect(()=>{
    getMovieDetails()
},[])

 function  getMovieDetails(){
    console.log(id);
  axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
      }
  })
  .then((res)=>{
console.log('movie details',res.data);
  })
  .catch((err)=>{
console.log('err details',err);
  })

 }
  return <>
  
  
  </>
}
