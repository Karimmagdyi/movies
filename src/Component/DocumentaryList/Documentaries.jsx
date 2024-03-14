import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { myApiContext } from '../Context/Context';
import { Link, NavLink } from 'react-router-dom';

export default function Documentaries() {

    const [documentary, setDocumentary] = useState([])
    const [layer, setLayer] = useState(false)


    const{details,similar,movieDetails,provider,getCast,cast,getVideo,video}=useContext(myApiContext)

function closeLayer(){
  setLayer(false);
}

function clicked(id){
  setLayer(true)
  console.log('id',id);
}

useEffect(()=>{
    docs()
},[])
        function docs(){
            axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=99`,{
                method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
        }
            })
            .then((res)=>{
console.log('documentary',res.data.results);
setDocumentary(res.data.results)
            })
            .catch((err)=>{
console.log('docume',err);
            })
        }

        function showDetails(id){
            movieDetails(id)
            clicked(id)
            getCast(id)
            getVideo(id)
          }
  return <>
  
  
  {layer===true?<div className='layer pt-5'>
   
  <div className=' bg-black mx-auto contentt'>
      <div className='d-flex align-items-center flex-column'>
      <iframe height={400} className='w-100' src={`https://www.youtube-nocookie.com/embed/${video?.key }`} frameborder="0"></iframe><h2 className='desc-title text-white '>{details.title}</h2>
<div className='d-flex information text-white' > 
<span className='ms-4' >{details.release_date}</span>
<span className='ms-4'>{details.runtime} min</span>
<span className='ms-4'><i className="fa-solid fa-star star"></i> {details.vote_average}</span>
</div>
      <a href={provider.US?.link}>
<button className='btn btn-outline-danger mt-3'>watch</button>
</a>
      </div>
      
      <div className="desc text-white mt-5 bg-transparent ps-4">{details.overview}</div>
      
      <div className='row'>
      {cast.map((cast,ind)=><div key={ind} className='col-4 col-md-2'>
        <Link className='text-decoration-none' to={`/ActorsDetails/${cast.id}${cast.profile_path}`}>
        <div className='cast pt-5'>
 <img className='w-100' src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="" />
 <h6 className='text-white'>{cast.original_name}</h6>
 {/* <h6 className='text-white'>{cast.character}</h6> */}
</div>
        </Link>
</div>)}
      </div>
<div className="row justify-content-center mt-5 gy-4">
  {similar.map((similar,idx)=> <div key={idx} className=' col-6 col-sm-5 '>
    <img onClick={()=>{showDetails(similar.id)}}  className='w-100' src={`https://image.tmdb.org/t/p/original/${similar.poster_path || similar.poster_path}}`}alt="" />
    <h6 className='text-white'> {similar.title}</h6>
     </div>)}
   
</div>

    </div>
    
    
    <i role='button' onClick={closeLayer} className="fa-solid fa-x fa-xl closeIcon text-white"></i></div> :<div className={``}>
      
  <div className="container pt-6">
    <div className="row gy-3 ">
        <h5 className='text-white h4'>Documentaries</h5>
        {documentary.map((movies,index)=> <div  key={index} className= 'col-6 col-md-3 '>
           {/* <Link to={`MovieDetails/${movies.id}`}> */}
           <div onClick={()=>{showDetails(movies.id)}} className=' '>
           <img className="w-100 " height={230} src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path || movies.poster_path}`} alt={movies.title} />
              <h5 className='text-center text-white card-title text-decoration-none list-unstyled'>{movies.title}</h5>
           </div>
           {/* </Link> */}
             </div>)}
  
    </div>
  </div>
  <nav className='' aria-label="...">
  <ul className="pagination d-flex justify-content-center pt-5 pb-4 ">
    <li className="page-item disabled">
      <NavLink className="page-link">Previous</NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to={'/DocumentaryList'}>1</NavLink></li>
    <li className="page-item" aria-current="page">
      <NavLink className="page-link" to={'/Documentary2'}>2</NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to={'/Documentary3'}>3</NavLink></li>
    <li className="page-item">
      <NavLink className="page-link">Next</NavLink>
    </li>
  </ul>
</nav>
  </div>}


  
  </>
}










// cast     

// {cast.map((cast,ind)=><div key={ind} className='col-4 col-md-2'>
// <div className='cast d-flex flex-row'>
//  <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="" />
//  <h4>{cast.original_name}</h4>
//  <h4>{cast.character}</h4>
// </div>
// </div>)}




// { <div style={{marginLeft:"380px"}} className="d-flex justify-content-center flex-column align-items-center content bg-black w-50"><img className='details-img' width={"600px"} src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}alt="" />
// <h2 className='desc-title text-white '>{details.title}</h2>
// <div className='d-flex information text-white' > 
// <span className='ms-4' >{details.release_date}</span>
// <span className='ms-4'>{details.runtime} min</span>
// <span className='ms-4'><i className="fa-solid fa-star star"></i> {details.vote_average}</span>
// </div>
// <a href={provider.US?.link}>
// <button className='btn btn-outline-danger mt-3'>watch</button>
// </a>
// <div className="desc text-white mt-5 bg-transparent ps-4">{details.overview}</div>
// <div className="row justify-content-center mt-5 gy-4">
//   {similar.map((similar,idx)=> <div key={idx} className=' col-sm-5 '>
//     <img onClick={()=>{showDetails(similar.id)}}  width={"250px"} src={`https://image.tmdb.org/t/p/w500/${similar.poster_path || similar.poster_path}}`}alt="" />
//     <h6 className='text-white'> {similar.title}</h6>
//      </div>)}
   
// </div>
// </div> }