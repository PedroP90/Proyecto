import { TextField } from '@mui/material'
import React from 'react'

export const ContactPage = () => {
  return (
    <>  
      <section className='contact'>
        <h2>Zona de Registro</h2>
        <form>
          <TextField className='contacto' 
              label="Nombre" variant='outlined' 
              placeholder='Nombre Completo'
              InputLabelProps={{
                shrink: true,
              }}
              />
          <TextField className='contacto'
              label="Apellidos" variant='outlined'
              placeholder='Apellidos Completos'
              InputLabelProps={{
                shrink: true,
              }}
              />
        </form>
        <figure>
          <img src='https://www.kanlli.com/wp-content/uploads/2017/03/REGISTRO-ONLINE.png'></img>
        </figure>
      </section>    
      
    </>
  )
}


