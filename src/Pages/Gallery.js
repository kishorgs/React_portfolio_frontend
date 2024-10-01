import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../images/img1.JPG'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.JPG'

const Gallery = ({setProgress}) => {
  useEffect(()=>{
    setProgress(10)
    setTimeout(()=>{
    setProgress(100)
    },500)
    
      },[setProgress])
    
  return (
   <>
   <div className="gallery-container">
   <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          loading='lazy'
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          loading='lazy'
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          loading='lazy'
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
   
   </>
  )
}

export default Gallery
