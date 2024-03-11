import { click } from '@testing-library/user-event/dist/click'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(layer, setLayer) {
  const [otherNav, setOtherNav] = useState(false)
  const [search, setSearch] = useState(false)
  const [serachRes, setSerachRes] = useState([])
  function clicked(){
    setOtherNav(true)
    console.log('hello');
  }
  function closeClick(){
    setOtherNav(false)
  }
  function searchClicked(){
    setSearch(true);
    console.log('hello');
  }
  function closeSearch(){
    setSearch(false);
  }
  
  function searchMovie(){
   const values= document.getElementById('search').value
   axios.get(`https://api.themoviedb.org/3/search/movie?query=${values}&include_adult=false&language=en-US&page=1`,{
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQxMWYxZDc3MGVjNGZhNWQ4YzEzNDBkZmRmYWIwNiIsInN1YiI6IjY1ZTUxZDA5Yzk5ODI2MDE0ODYwYzE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ3ylpHKNniknE-IEWZE2pRvClWaYwfBnJcomaZ9r0I'
    }
   })
   .then((res)=>{
console.log('searched',res.data.results);
// setSearch(res.data.results)
const value=res.data.results
console.log(value);
setSerachRes(value)
   })
   .catch((err)=>{
console.log('search err',err);

   })
  }

  
  return <>


  {search===true?<div className='searchLayer'>
<div className='mx-auto w-50 '>
  <input onInput={searchMovie}  className='form-control ' id='search' type="text" placeholder="Search..."/>
  <i role='button' onClick={closeSearch} className="fa-solid fa-x fa-xl closeIcon text-white"></i>
  </div>
  <div className="row mt-2  gy-3 bg-black">
    
  {serachRes.map((movies,idx)=><div key={idx} className='col-6 col-md-3'>
    <div className="layerss">

    
<div className="movie">
<img className='w-100' height={250} src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path || movies.poster_path}`} alt="" />
<h4 className='text-white'>{movies.title}</h4>
</div>
</div>
</div>)}
     
    
  </div>

  </div>:<>{otherNav===false?<nav className="navbar navbar-dark fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={'/Home'}style={{color:'red'}} >Movlify</Link>
    <div className='ms-auto px-4'>
    <span><i role='button' onClick={searchClicked} className="fa-solid fa-magnifying-glass fa-lg text-white "></i></span>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header d-flex">
        <NavLink role='button' onClick={closeClick} className="offcanvas-title text-decoration-none">Movies</NavLink>
        <div className='ms-auto'>
        <NavLink role='button' onClick={clicked} className="mt-2 text-decoration-none">Actors</NavLink>
        </div>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas" aria-label="Close">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={'/comedy'}>comedy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/DocumentaryList'}>Documentary</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/crime'}>crime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/action'}>action</NavLink>
          </li>
          
        </ul>
     
      </div>
    </div>
  </div>
</nav>     


:<nav className="navbar navbar-dark  fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={'/Home'} style={{color:'red'}}>Movlify</Link>
    <div className='ms-auto px-4'>
    <span><i role='button' onClick={searchClicked} className="fa-solid fa-magnifying-glass fa-lg text-white "></i></span>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header d-flex">
        <NavLink role='button' className="offcanvas-title text-decoration-none" onClick={closeClick} id="offcanvasDarkNavbarLabel">Movies</NavLink>
        <div className='ms-auto'>
        <NavLink role='button' onClick={clicked} className="mt-2 text-decoration-none">Actors</NavLink>
        </div>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul  className="navbar-nav justify-content-end flex-grow-1 pe-3"  data-bs-dismiss="offcanvas" aria-label="Close">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to={'/PopularActors'}>Most Popular Actors</NavLink>
          </li>

         
          
        </ul>
    
      </div>
    </div>
  </div>
</nav>}</>}
 

  
  </>
}

