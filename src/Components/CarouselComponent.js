import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselComponent = () => {
  return (
    <Carousel fade className = "mx-auto mt-5" style = {{width: 1200, height: 400, overflow:'hidden'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/FEB/SEASONSTART/1220x400.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/OCT/JB/Empyrean/ForumBanner1200x620.jpg?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/NOV/2.%20ouijaboard/ForumBanner1200x620.jpg?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default CarouselComponent