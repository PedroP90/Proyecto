import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarPro = () => {
  return (
      <nav className='pro'>
        <Link to='personales'>Proyectos Personales</Link>
        <Link to='educativos'>Proyectos Educativos</Link>
     </nav>
  )
}
