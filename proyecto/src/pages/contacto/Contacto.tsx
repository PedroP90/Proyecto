import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import './contacto.css'
import { ContactPage } from './pages/Contact'
import { InformacionPage } from './componentes/Informacion'

export const ContactoPage = () => {
  return (
    <>
        <section className='contact'>
          <h2>Zona de Contacto</h2>
          <Grid container>
            <Grid item xs={12} md={6} className='info bordes' style={{height: '40vh'}}>
              <InformacionPage/>
            </Grid>
            <Grid item xs={12} md={6} className='bordes ' >
              <ContactPage/>
            </Grid>
          </Grid>
        </section>  
    </>
  )
}
