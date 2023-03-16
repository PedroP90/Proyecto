import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { Diseños } from '../../../data/seeds'


export const DiseñosPage = () => {
    return (
      <>
          <h2>DISEÑO GRÁFICO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</p>
          <Table striped bordered hover>
            <thead>
                <th></th>
                <th>Servicio</th>
                <th>Labor</th>
            </thead>
            <tbody>
                {
                  Diseños.map( (diseño) => (
                    <tr>
                      <td width='10%'><Image width='80%' src={diseño.imagen} /> </td>
                      <td>{ diseño.name }</td>
                      <td>{ diseño.texto }</td>
                    </tr>
                  ))
                }
            </tbody>
          </Table>
      </>
    )
  }