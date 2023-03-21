import React from 'react'
import { Card } from 'react-bootstrap'
import { Desarrollos } from '../../../data/seeds'
import Rollo from '../../../img/rollo.jpg'




export const DesarrolloPage = () => {
    return (
      <>
        <section className='diseño'>
          <h2>Desarrollo Web</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nesciunt deleniti ad commodi quo? Ea reiciendis debitis dolores! Deserunt deleniti porro cumque eos, doloribus qui rerum repellat earum dignissimos iusto!</span>
          <figure>
            <img src={Rollo}></img>
          </figure>
          <div className='tarjetas'>
            {
              Desarrollos.map( (desarrollo) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={desarrollo.imagen} className='img' />
                    <Card.Body>
                      <Card.Title>{desarrollo.name}</Card.Title>
                      <Card.Text>{desarrollo.texto}</Card.Text>
                    </Card.Body>
                </Card>
              ))
            }
          </div>
        </section>
      </>
    )
  }