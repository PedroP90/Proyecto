import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeSharpIcon from '@mui/icons-material/HomeSharp'
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import ConnectWithoutContactSharpIcon from '@mui/icons-material/ConnectWithoutContactSharp';

export const NavBar = () => {
  return (
    <nav className='menu'>
      {/* <Link to='/'>
        <Button className='miboton' variant='contained' color='primary' startIcon={<HomeSharpIcon/>}>
          COMIENZO
        </Button>
      </Link>
      <Link to='formacion'>
        <Button color='primary' variant='contained' startIcon={<SettingsSuggestSharpIcon/>}>
          SERVICIOS
        </Button>
      </Link>
      <Link to='proyectos'>
        <Button color='primary' variant='contained' startIcon={<AccountBalanceSharpIcon/>}>
          PROYECTOS
        </Button>
      </Link>
      <Link to='about'>
        <Button color='primary' variant='contained'startIcon={<ConnectWithoutContactSharpIcon/>}>
          CONTACTO
        </Button>
      </Link> */}
      <Link to='/'>
        <span><HomeSharpIcon/></span>
        <span>INICIO</span>
      </Link>
      <Link to='servicios'>
        <span><SettingsSuggestSharpIcon/></span>
        <span>SERVICIOS</span>
      </Link>
      <Link to='proyectos'>
        <span><AccountBalanceSharpIcon/></span>
        <span>PROYECTOS</span>
      </Link>
      <Link to='contacto'>
        <span><ConnectWithoutContactSharpIcon/></span>
        <span>CONTACTO</span>
      </Link>
    </nav>
  )
}
