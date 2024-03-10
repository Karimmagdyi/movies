import axios from "axios";
import React, { createContext, useState } from "react";

 export const myApiContext=createContext()
console.log();
export function ApiContext({children}){
const [details, setDetails] = useState([])
const [similar, setSimilar] = useState([])
const [provider, setProvider] = useState([])
const [biography, setBiography] = useState(null)
const [credit, setCredit] = useState([])
const [actor, setActor] = useState([])


function movieProvider(id){
  axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers`,{
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
  }
  })
  .then((res)=>{
console.log('provider',res.data.results);
setProvider(res.data.results)
  })
  .catch((err)=>{
console.log('error provider',err); 
  })
}

    function movieDetails(id){
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,{
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
     } })
     .then((res)=>{
        console.log('details', res.data);
        setDetails(res.data);
        similarMovies(id)
        movieProvider(id)
     })
     .catch((err)=>{
         console.log('details err',err);
        })
    }

    function similarMovies(id){
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,{
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
          }
        })
        .then((res)=>{
  console.log('similar',res.data.results.splice(0,10));
  setSimilar(res.data.results.splice(0,6))
        })
        .catch((err)=>{
  console.log('err similar',err);
        })
      }


      function getActorBiography(id){
        axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`,{
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
          }
        })
        .then((res)=>{
setBiography(res.data.biography)
setActor(res.data)
        })
        .catch((err)=>{
console.log('actor details err',err);
        })
      }


        function actorMovies(id){
          axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,{
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
            }
          })
          .then((res)=>{
          console.log('credit',res.data.cast);
          setCredit(res.data.cast)
          })
          .catch(()=>{

          })
        }
    return <>
    
    <myApiContext.Provider value={{ details,similar,similarMovies,movieDetails,provider,getActorBiography,biography,actorMovies,credit,actor}}>
       {children}
    </myApiContext.Provider>
    </>
}
