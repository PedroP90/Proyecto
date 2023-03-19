import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import logo from '../../logo.svg';
import { NavBar } from './NavBar';
import { ServiciosPage } from '../servicios/Servicios';
import { ProyectosPage } from '../proyectos/Proyectos';
import './header.css'

export const Header = () => {
  return (
    <>
      <section className='header'>
        <div className='name'>
          <h1>SOLUCIONES ANTEO</h1>
          <h2>Diseño web</h2>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
      </section>
    </>
  )
}
