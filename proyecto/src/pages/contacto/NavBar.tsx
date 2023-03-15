import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navcon'>
        <Link to='registro'>Zona de Registro</Link>
        <Link to='contact'>Zona de Contacto</Link>
    </nav>
  )
}
