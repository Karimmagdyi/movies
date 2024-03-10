import React, { useContext, useEffect, useState } from 'react'
import { myApiContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ActorsDetails() {
    const {id} = useParams()
    const{actorpath}=useParams()
    useEffect(()=>{
        getActorBiography(id)
        actorMovies(id)
       
    },[])
//  console.log(id);
 const{getActorBiography,biography,actorMovies,details,similar,movieDetails,provider,credit,actor}=   useContext(myApiContext)
//  console.log('ayhaga',credit);
 const [layer, setLayer] = useState(false)



 function closeLayer(){
    setLayer(false);
  }
  
  function clicked(id){
    setLayer(true)
    console.log('id',id);
  }
  function showDetails(id){
      movieDetails(id)
      clicked(id)
    }
  return <>
  <div className=''>
        
    </div>
    {layer===true?<div className='layer pt-5'>
    <div style={{marginLeft:"380px"}} className="d-flex justify-content-center flex-column align-items-center content bg-black w-50"><img className='details-img' width={"600px"} src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path||details.poster_path}`}alt="" />
    <h2 className='desc-title text-white '>{details.title}</h2>
    <div className='d-flex information text-white' > 
    <span className='ms-4' >{details.release_date}</span>
    <span className='ms-4'>{details.runtime} min</span>
    <span className='ms-4'><i className="fa-solid fa-star star"></i> {details.vote_average}</span>
    </div>
    <a href={provider.US?.link}>
    <button className='btn btn-outline-danger mt-3'>watch</button>
    </a>
    <div className="desc text-white mt-5 bg-transparent ps-4">{details.overview}</div>
    <div className="row justify-content-center mt-5 gy-4">
      {similar.map((similar,idx)=> <div key={idx} className=' col-sm-5 '>
        <img onClick={()=>{showDetails(similar.id)}}  width={"250px"} src={`https://image.tmdb.org/t/p/w500/${similar.poster_path || similar.poster_path}}`}alt="" />
        <h6 className='text-white'> {similar.title}</h6>
         </div>)}
    </div>
    </div>
    
    
    <i role='button' onClick={closeLayer} className="fa-solid fa-x fa-xl closeIcon text-white"></i></div> :<div className={`bg-black`}>
      
  <div className="container pt-6">
    <div className="row gy-3 ">
    <h3 className='text-white'>{actor.name}</h3>
        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            <img className='w-50' height={300} src={`https://image.tmdb.org/t/p/w500/${actorpath}`} alt="" />
        <h5 className='text-white py-3'>{actor.known_for_department}</h5>
            <p className='text-white'>{biography}</p>
        </div>
        {credit?.map((movies,index)=> <div  key={index} className= 'col-6 col-md-3 '>
           <div onClick={()=>{showDetails(movies.id)}} className=' '>
           <img className="w-100 " height={230} src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path || movies.poster_path}`} alt={movies.title} />
              <h6 className='py-2 text-primary'> <span className='text-white'>character:</span> {movies.character}</h6>
              <h5 className='text-center text-white card-title text-decoration-none list-unstyled'>{movies.title}</h5>
           </div>
             </div>)}
  
    </div>
  </div>
  
  </div>}

  </>
}
