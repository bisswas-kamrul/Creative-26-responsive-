import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Layout/Header'
import Futter from './Components/Layout/Futter'

const Rootlayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <Futter/>
   </>
  )
}

export default Rootlayout