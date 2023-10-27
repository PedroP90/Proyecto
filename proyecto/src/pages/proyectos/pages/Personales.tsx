import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import Foto1 from '../../../img/proyecto.png'
import Foto2 from '../../../img/react.png'



export const PersonalesPage = () => {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <h2>Primer Proyecto</h2>
                <img src={Foto1} alt='foto1'></img>
                <p>El primer proyecto personal dedicado a raspar un poco la nota final del primer trimestre, es simplemente html y css con el diseño hecho de antemano en figma. Los botones tenía unos mínimos efectos, la imagen la saqué directamente de figma ya que la edité ahí, como detalle llegué a incluir enlaces a mis redes sociales.</p>
            </SwiperSlide>
            <SwiperSlide>
              <h2>Segundo Proyecto</h2>
              <img src={Foto2} alt='foto2'></img>
              <p>El proyecto del segundo trimestre con implementación de React, RouterDom y diversas librerías como Material UI, Boostrap y Swiper. Tiene diseño responsivo principalmente a través del CSS, salvo la parte del formulario donde se han usado componentes Grid para realizar la maquetación.</p>
            </SwiperSlide>
        </Swiper>
    </>
    
  )
}


