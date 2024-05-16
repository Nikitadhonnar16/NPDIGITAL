import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import v1 from "./Videos/v1.mp4"
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
import img4 from "./Images/img4.jpg"


const CarouselPage = () => {
  return (
    <div>

<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <video
          className="d-block w-100"
          src={v1} autoPlay muted loop controls
          alt="First slide"
        />
        <Carousel.Caption className='home'>
        <h1 className='heading1'>NP Digital acquires creative agency REBL House.</h1>
        <p className='para mb-5'>January, 2024: With this acquisition, NP Digital rounds out its unrivaled approach to end-to-end marketing, adding to its global team of solutions specialists, data analysts, and now a robust team of creative storytellers.</p>
        <a href="" className='alink m-3'>Learn more</a>
        <a href=""  className='alink'>Watch reel</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2} />
        <Carousel.Caption className='slide2'>
        <h1 className='heading2'>NP Digital acquires creative agency REBL House.</h1>
        <p className='para2 mb-5'>Ad Age names NP Digital a Best Places to Work for 2024. January, 2024: NP Digital among the top large companies that did a remarkable job overcoming challenges in the changing media market over the last year while maintaining employee satisfaction.</p>
        <a href="" className='alink m-3'>Learn more</a>
        <a href=""  className='alink'>Hire us!</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption className='slide3'>
        <h1 className='heading1'>NP Digital acquires creative agency REBL House.</h1>
        <p className='para3 mb-5'>January, 2024: With this acquisition, NP Digital rounds out its unrivaled approach to end-to-end marketing, adding to its global team of solutions specialists, data analysts, and now a robust team of creative storytellers.</p>
        <a href="" className='alink m-3'>Learn more</a>
        <a href=""  className='alink'>Watch reel</a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>        
      
    </div>
  )
}

export default CarouselPage
