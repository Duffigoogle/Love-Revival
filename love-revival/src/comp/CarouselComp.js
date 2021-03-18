import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-elastic-carousel';
import carouselImg1 from '../images/IMG_8753.png';
import carouselImg2 from '../images/IMG_8708.png';
import carouselImg3 from '../images/IMG_8733.png';

function CarouselComp() {
    let carouselStyes = { width: '1000px', margin: '20px auto', border: '1px solid red'}
    
    return (
        <div style={carouselStyes}>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={carouselImg1}
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100 carouselImg"
                    src={carouselImg2}
                    alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 carouselImg"
                    src={carouselImg3}
                    alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComp
