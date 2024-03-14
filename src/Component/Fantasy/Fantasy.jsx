import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { myApiContext } from '../Context/Context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Fantasy({layer,setLayer}) {
    const [comedyList, setComedyList] = useState([])
    const{details,similar,movieDetails,provider,cast,getCast,getVideo,video}=useContext(myApiContext)

    useEffect(()=>{
        Comedy()
    },[])
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
    getCast(id)
    getVideo(id)
  }
    function Comedy(){
        axios.get(`https://api.themoviedb.org/3/list/10?language=en-US&page=1`,{
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
              }
        })
        .then((res)=>{
console.log('fantasy',res.data);
setComedyList(res.data.items)
        })
        .catch((err)=>{
console.log('fantasy',err);
        });
    }


    var settings = {
        
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
              slidesToScroll: 1,
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
<div className=' bg-black mx-auto contentt'>
      <div className='d-flex align-items-center flex-column'>
    <iframe src={`https://www.youtube-nocookie.com/embed/${video?.key }`} frameborder="0"></iframe>
<h2 className='desc-title text-white '>{details.title}</h2>
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
<div className='cast'>
 <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="" />
 <h6 className='text-white'>{cast.original_name}</h6>
 {/* <h6 className='text-white'>{cast.character}</h6> */}
</div>
</div>)}
      </div>
<div className="row justify-content-center mt-5 gy-4">
  {similar.map((similar,idx)=> <div key={idx} className=' col-6 col-sm-5 '>
    <img onClick={()=>{showDetails(similar.id)}}  className='w-100' src={`https://image.tmdb.org/t/p/w500/${similar.poster_path || similar.poster_path}}`}alt="" />
    <h6 className='text-white'> {similar.title}</h6>
     </div>)}
   
</div>

    </div>
    
    
    <i role='button' onClick={closeLayer} className="fa-solid fa-x fa-xl closeIcon text-white"></i></div> :<div className={` `}>
      
  <div className="container">
    <div className="row ">
        <h5 className='text-white h4'>fantasy Movies</h5>
  <Slider {...settings}>
        {comedyList.map((movies,index)=> <div  key={index} className='col-md-4 px-2 mb-3'>
           {/* <Link to={`MovieDetails/${movies.id}`}> */}
           <div onClick={()=>{showDetails(movies.id)}} className=' '>
           <img className="w-100 rounded-3 " height={230} src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path || movies.poster_path}`} alt={movies.title} />
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
