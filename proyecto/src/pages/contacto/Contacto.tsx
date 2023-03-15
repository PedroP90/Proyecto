import { Grid, TextField } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'

export const ContactoPage = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}
