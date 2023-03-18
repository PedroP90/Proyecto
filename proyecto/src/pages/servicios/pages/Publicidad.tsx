import React from 'react'
import { Card } from 'react-bootstrap'
import { Publicidades } from '../../../data/seeds'



export const PublicidadPage = () => {
    return (
      <>
        <section className='diseño'>
          <h2>Publicidad Online</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas officia provident odit amet ad dolorum quasi corporis voluptatum aperiam exercitationem, eaque dolores ducimus ratione nostrum beatae assumenda cupiditate adipisci quam.</p>
          <div>
            {
              Publicidades.map( (publicidad) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={publicidad.imagen} className='img' />
                    <Card.Body>
                      <Card.Title>{publicidad.name}</Card.Title>
                      <Card.Text>{publicidad.texto}</Card.Text>
                    </Card.Body>
                </Card>
              ))
            }
          </div>
        </section>
      </>
    )
  }