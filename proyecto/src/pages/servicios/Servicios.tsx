import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import './servicios.css'

export const ServiciosPage = () => {
  return (
    <>
        <NavBar />
        
        <Outlet />
    </>
  )
}
