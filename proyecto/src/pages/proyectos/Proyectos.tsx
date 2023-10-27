import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarPro } from './NavBarpro'
import './proyectos.css'


export const ProyectosPage = () => {
  return (
    <>
        <NavBarPro />
        <Outlet/>
    </>
  )
}