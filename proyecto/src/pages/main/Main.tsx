import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ServiciosPage } from '../servicios/Servicios'
import { ProyectosPage } from '../proyectos/Proyectos'
import { HomePage } from '../home/Home'

import { InformacionPage } from '../contacto/componentes/Informacion'
import { DiseñosPage } from '../servicios/pages/Diseño'
import { DesarrolloPage } from '../servicios/pages/Desarrollo'
import { PublicidadPage } from '../servicios/pages/Publicidad'
import { SeoPage } from '../servicios/pages/Seo'
import { PersonalesPage } from '../proyectos/pages/Personales'
import { EducativosPage } from '../proyectos/pages/Educativos'
import { ContactoPage } from '../contacto/Contacto'


export const Main = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='servicios' element={ <ServiciosPage/> }>
            <Route path='diseño' element={ <DiseñosPage/> } />
            <Route path='desarrollo' element={ <DesarrolloPage/> } />
            <Route path='publicidad' element={ <PublicidadPage/> } />
            <Route path='seo' element={ <SeoPage/> } />
          </Route>
          <Route path='proyectos' element={ <ProyectosPage/> }>
            <Route path='personales' element={ <PersonalesPage/> } />
            <Route path='educativos' element={ <EducativosPage/> } />
          </Route>
          <Route path='contacto' element={ <ContactoPage/> }>
            <Route path='contact' element={ <ContactoPage/>}/>
          </Route>
        </Routes>
    </div>
  )
}
