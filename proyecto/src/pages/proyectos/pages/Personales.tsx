import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import Foto1 from '../../../img/proyecto.png'

export const PersonalesPage = () => {
  return (
    <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <h2>Primer Proyecto</h2>
                <img src={Foto1}></img>
                <p>El primer proyecto personal dedicado a raspar un poco la nota final del primer trimestre, es simplemente html y css con el diseño hecho de antemano en figma. Los botones tenía unos mínimos efectos, la imagen la saqué directamente de figma ya que la edité ahí, como detalle llegué a incluir enlaces a mis redes sociales.</p>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
    </>
    
  )
}


