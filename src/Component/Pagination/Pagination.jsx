import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Pagination() {
  return <>
  
  <nav className='bg-black' aria-label="...">
  <ul className="pagination d-flex justify-content-center pt-5 pb-4 bg-black">
    <li className="page-item disabled">
      <NavLink className="page-link">Previous</NavLink>
    </li>
    <li className="page-item"><Link className="page-link" to={'/crime'}>1</Link></li>
    <li className="page-item" aria-current="page">
      <NavLink className="page-link" to={'/comedy'}>2</NavLink>
    </li>
    <li className="page-item"><Link className="page-link" to={'/action'}>3</Link></li>
    <li className="page-item">
      <NavLink className="page-link">Next</NavLink>
    </li>
  </ul>
</nav>
  </>
}
