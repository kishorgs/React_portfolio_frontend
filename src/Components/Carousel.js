import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/DSC_0218.JPG'
import img2 from './img/DSC_0219.JPG'
import img3 from './img/DSC_0522(1).jpg'
import React from 'react';

function UncontrolledExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;