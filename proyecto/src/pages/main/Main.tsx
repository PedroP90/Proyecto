import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FormacionPage } from '../formacion/Formacion'
import { ProyectosPage } from '../proyectos/Proyectos'
import { EducativosPage } from '../proyectos/pages/educativos/Educativos'
import PersonalesPage from '../proyectos/pages/personales/Personales'
import { HomePage } from '../home/Home'
import { ContactPages } from '../contacto/pages/Contact'
import { RegistroPages } from '../contacto/pages/Registro'

export const Main = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='formacion' element={ <FormacionPage/> } />
          <Route path='proyectos' element={ <ProyectosPage/> }>
            <Route path='personales' element={ <PersonalesPage/> } />
            <Route path='educativos' element={ <EducativosPage/> } />
          </Route>
          <Route path='contacto' element={ <ContactPages/> }>
            <Route path='registro' element={ <RegistroPages/>}/>
            <Route path='contact' element={ <ContactPages/>}/>
          </Route>
        </Routes>
    </div>
  )
}
