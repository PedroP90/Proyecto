import { Button, Grid } from '@mui/material'
import React from 'react'
import { Formulario } from '../componentes/Formulario'

export const ContactPage = () => {
  return (
    <form>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Email' />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Nombre' />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Apellidos' />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Dirección' />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Teléfono' />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Formulario inputLabel='Mensaje de contacto' />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant='contained' fullWidth>Enviar</Button>
            </Grid>
        </Grid>
    </form>
  )
}
