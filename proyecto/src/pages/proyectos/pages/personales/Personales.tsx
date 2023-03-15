
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PersonalesPage() {
  return (
    <Carousel>
            <Carousel.Item>
                <img
                    className="personal1"
                    src="https://i.ibb.co/9NWNWV7/personal1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Primer Proyecto HTML</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="personal2"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Primer Proyecto React</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}

export default PersonalesPage;