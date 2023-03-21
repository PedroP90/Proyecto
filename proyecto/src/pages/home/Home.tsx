import React from 'react'
import { Figure, Nav } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Homecards } from './components/Homecards';
import './home.css'
import Home from '../../img/home.png'

export const HomePage = () => {
  return (
    <>
        <section className='home'>
            <h1>Nuestras redes sociales</h1>
            <Nav as="div">
                <Nav.Item as="div">
                    <Nav.Link eventKey="linkedin"><FaLinkedin/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="div">
                    <Nav.Link eventKey="github"><FaGithub/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="div">
                    <Nav.Link eventKey="Instagram"><FaInstagram/></Nav.Link>
                </Nav.Item>
                <Nav.Item as="div">
                    <Nav.Link eventKey="Twitter"><FaTwitter/></Nav.Link>
                </Nav.Item>
            </Nav>
            <p>Soluciones Anteo proporciona las mejores y más actualizadas herramientras de diseño para ponerlas al servicio de los deseos del cliente. Ofrecemos el mejor asesoramiento para la creación de páginas que encarnen los valores y las necesidades de su empresa.</p>
        </section>
        <article className='inicio'>
            <figure>
                <img src={Home}></img>
            </figure>  
            <Homecards/>
        </article>
    </>
    
  )
}
