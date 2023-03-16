import { TextField } from '@mui/material'
import React from 'react'

export const ContactPage = () => {
  return (
    <>  
        <form>
      <TextField 
              label="Nombre" variant='standard' 
              placeholder='Nombre Completo'
              InputLabelProps={{
                shrink: true,
              }}
      />
      <TextField 
              label="Motivo" variant='outlined' 
              placeholder='Motivo de contacto'
              InputLabelProps={{
                shrink: true,
              }}
      />
      <TextField 
              label="Cuerpo" variant='filled' 
              placeholder='Cuerpo del motivo'
              InputLabelProps={{
                shrink: true,
              }}
      />  
      </form>
    </>
  )
}
