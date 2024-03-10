import React from 'react'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Pagination from '../Pagination/Pagination'

export default function Layout() {
  return<>
  <Navbar/>
  <Outlet/>
  {/* <Pagination/> */}
  
  </>
}
