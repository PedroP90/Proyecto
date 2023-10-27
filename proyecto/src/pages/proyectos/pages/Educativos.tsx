import React from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Air from '../../../img/Airbnb2.jpeg'
import Caronte from '../../../img/Caronte.png'
import Examen from '../../../img/examen.png'
import Caravana from '../../../img/caravana.jpeg'



export const EducativosPage = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <h2>Página Airbnb</h2>
                <img src={Air} alt='air'></img>
                <p>Una de las primeras páginas cuya maquetación fue mediante el uso de display: flex/flex-flow, cada componente tiene la misma propiedad para colocarlo en la página tanto a sí mismo como a los componentes que dependen de él.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Página Caronte</h2>
                <img src={Caronte} alt='caronte'></img>
                <p>Caronte fue otra página donde se empleo la propiedad display: flex para la maquetación de sus componentes. La novedad aquí fue la implementación del diseño responsivo mediante el cual la maquetación de la página cambia según el tamaño del navegador.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Examen Primer Trimestre</h2>
                <img src={Examen} alt='examen'></img>
                <p>Examen del primer trimestre, en este caso es la versión final del examen tras terminar su desarrollo en casa, se trata de una página con diseño responsivo de dos fases: móvil y tablet/desktop.</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>Examen Segundo Trimestre</h2>
                <img src={Caravana} alt='caravana'></img>
                <p>Examen terminado en casa del segundo trimestre, el desempeño durante el tiempo de clase fue desastroso pero con calma y tiempo se pudo terminar un resultado más digno. Esperemos que el presente proyecto ayude a enmendar semejante desastre de examen.</p>
            </SwiperSlide>
        </Swiper>
    </>
  )
}
