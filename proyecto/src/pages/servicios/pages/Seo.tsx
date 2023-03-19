import React from 'react'
import { Card } from 'react-bootstrap'
import { Diseños, Posicionamientos } from '../../../data/seeds'


export const SeoPage = () => {
    return (
      <>
        <section className='diseño'>
          <h2>Seo: Posicionamiento</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, exercitationem dignissimos! Nobis, possimus nulla omnis optio libero totam officiis iure placeat sed odit eaque, veritatis doloremque aliquam voluptatum velit vitae?</p>
          <div>
            {
              Posicionamientos.map( (posicionamiento) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={posicionamiento.imagen} className='img' />
                    <Card.Body>
                      <Card.Title>{posicionamiento.name}</Card.Title>
                      <Card.Text>{posicionamiento.texto}</Card.Text>
                    </Card.Body>
                </Card>
              ))
            }
          </div>
        </section>
      </>
    )
  }