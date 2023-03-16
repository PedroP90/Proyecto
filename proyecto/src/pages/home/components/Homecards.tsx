import React from 'react'
import { Card } from 'react-bootstrap'
import { Paginas } from '../../../data/seeds'


export const Homecards = () => {
  return (
    <>
        <div className='card'>
        {
              Paginas.map( (pagina) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pagina.imagen} />
                    <Card.Body>
                    <Card.Title>{pagina.name}</Card.Title>
                    <Card.Text>{pagina.texto}</Card.Text>
                    </Card.Body>
                </Card>
              ))
          }
        </div>
    </>
  )
}

