import React from 'react'
import '../contacto.css'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export const InformacionPage = () => {
  return (
    <>    
        <Stack spacing={6} direction='column' >
          <Typography style={{color:'orange'}} variant='h3' className='parrafo'>Contáctanos</Typography>
          <Typography variant='h6' className='parrafo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id dolorum soluta quasi sequi dignissimos quidem quibusdam reprehenderit adipisci est nisi culpa harum a, eligendi debitis provident exercitationem labore eius.</Typography>
        </Stack>
    </>
  )
}


