import React from 'react'
import { Card } from 'react-bootstrap'
import { Publicidades } from '../../../data/seeds'
import Public from '../../../img/public.jpg'



export const PublicidadPage = () => {
    return (
      <>
        <section className='diseño'>
          <h2>Publicidad Online</h2>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas officia provident odit amet ad dolorum quasi corporis voluptatum aperiam exercitationem, eaque dolores ducimus ratione nostrum beatae assumenda cupiditate adipisci quam.</span>
          <figure>
            <img src={Public} alt='public'></img>
          </figure>
          <div className='tarjetas'>
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