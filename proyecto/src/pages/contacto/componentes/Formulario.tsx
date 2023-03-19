import React from 'react'
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';



const CssTextField = styled(TextField)({
    //cambia el foco, es decir el nombre que sale arriba al pinchar
    '& label.Mui-focused': {
      color: '#2F88FF',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        //cambia el borde permanente
      '& fieldset': {
        borderColor: '#2F88FF',
      },
      '&:hover fieldset': {
        //cambia el borde al pasar el ratón
        borderColor: '#2F88FF',
      },
      //cambia el borde al pinchar
      '&.Mui-focused fieldset': {
        borderColor: '#2F88FF',
      },
      //cambia el color del texto al escribir
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root':{
        color: 'white'
      },
    },
  });

export const Formulario = ({inputLabel='Sin label', inputType='text'}) => {
  return (
    <>
        <CssTextField 
        label={inputLabel}
        type={inputType}
        id="custom-css-outlined-input"
        InputLabelProps={{
            style:{
                color:'white'
            }
        }}
        />
    {/* <CssTextField 
    label="Custom CSS"
    id="custom-css-outlined-input"
    InputLabelProps={{
        style:{
            color:'white'
        }
    }}
    /> */}
    </>
  )
}
