import { ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="servicios">
        <Link to='diseño' > Diseño Web</Link>
        <Link to='desarrollo'>Desarrollo Web</Link>
        <Link to='publicidad'>Publicidad</Link>
        <Link to='seo'>SEO</Link>
    </nav>
  )
}


