import React from 'react'
import { Card } from 'react-bootstrap'
import { Diseños } from '../../../data/seeds'
import Grafic from '../../../img/grafic.jpg'



export const DiseñosPage = () => {
    return (
      <>
        
        <section className='diseño'>
          <h2>Diseño Gráfico</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</span>
            <figure>
              <img src={Grafic} alt='grafica1'></img>
            </figure>
            <div className='tarjetas'>
              {
                Diseños.map( (diseño) => (
                  <Card>
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