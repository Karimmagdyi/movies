import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Video() {
const [video, setVideo] = useState([])
useEffect(()=>{
    getVideo()
},[])

        function getVideo(){
            axios.get(`https://api.themoviedb.org/3/movie/155/videos?language=en-US`,{
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
                  }
            })
            .then((res)=>{
console.log('video',res.data.results[0]);
setVideo(res.data.results[0])
            })
            .catch((err)=>{
console.log('err video',err);
            })
        }


  return <>
  
  
  </>
}
