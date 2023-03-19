import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarPro } from './NavBarpro'
import logo from '../../img/logo.png'
import './proyectos.css'


export const ProyectosPage = () => {
  return (
    <>
        <NavBarPro />
        <Outlet/>
    </>
  )
}