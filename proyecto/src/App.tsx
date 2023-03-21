import React from 'react';import './App.css';
import { Header } from './pages/header/Header';
import { Main } from './pages/main/Main';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/Home';
import { ServiciosPage } from './pages/servicios/Servicios';
import { DiseñosPage } from './pages/servicios/pages/Diseño';
import { PublicidadPage } from './pages/servicios/pages/Publicidad';
import { DesarrolloPage } from './pages/servicios/pages/Desarrollo';
import { SeoPage } from './pages/servicios/pages/Seo';
import { ProyectosPage } from './pages/proyectos/Proyectos';
import { PersonalesPage } from './pages/proyectos/pages/Personales';
import { ContactoPage } from './pages/contacto/Contacto';
import { EducativosPage } from './pages/proyectos/pages/Educativos';


function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={ <Main/>}>
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
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
