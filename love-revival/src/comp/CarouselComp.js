import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselImg1 from '../images/IMG_8753.png';
import carouselImg2 from '../images/IMG_8708.png';
import carouselImg3 from '../images/IMG_8733.png';

function CarouselComp() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-200"
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
                    className="d-block w-200"
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
                    className="d-block w-200"
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
