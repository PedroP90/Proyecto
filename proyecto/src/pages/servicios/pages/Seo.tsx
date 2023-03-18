import React from 'react'
import { Card } from 'react-bootstrap'
import { Diseños } from '../../../data/seeds'


export const SeoPage = () => {
    return (
      <>
        <section className='diseño'>
          <h2>DISEÑO GRÁFICO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</p>
          <div>
            {
              Diseños.map( (diseño) => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={diseño.imagen} className='img' />
                    <Card.Body>
                      <Card.Title>{diseño.name}</Card.Title>
                      <Card.Text>{diseño.texto}</Card.Text>
                    </Card.Body>
                </Card>
              ))
            }
          </div>
        </section>
      </>
    )
  }