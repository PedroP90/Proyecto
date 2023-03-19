import React from 'react'
import { Card } from 'react-bootstrap'
import { Paginas } from '../../../data/seeds'


export const Homecards = () => {
  return (
    <>  
     
          <div className='tarjeta'>
            {
              Paginas.map( (pagina) => (
                <Card>
                    <Card.Img variant="top" src={pagina.imagen} className='img' />
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

