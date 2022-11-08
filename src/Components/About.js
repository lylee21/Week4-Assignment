import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const About = ({}) => {
  return (
    <> 
    <div style = {{backgroundColor: "black"}} className = "overflow-auto">
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
      {/* <div id="carouselExampleSlidesOnly" className="carousel slide mx-auto mt-5" data-ride="carousel" style = {{width: 1200}}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/FEB/SEASONSTART/1220x400.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/OCT/JB/Empyrean/ForumBanner1200x620.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.garenanow.com/web/image/lol/landing-dominion/SG-EN/2022/NOV/2.%20ouijaboard/ForumBanner1200x620.jpg" alt="Third slide"/>
          </div>
        </div>
      </div> */}
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center text-muted">About</h1>
            <p className="text-center text-muted">League of Legends is a team-based game with over 140 champions to make epic plays with. Play now for free.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About