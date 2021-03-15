import React from 'react';
import '../styles/picturegallery.scss';
import CarouselComp from './CarouselComp';
import DottedBackg from './DottedBackg';
import MediaComp from './MediaComp';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carouselImg1 from '../images/IMG_8753.png';
import carouselImg2 from '../images/IMG_8708.png';
import carouselImg3 from '../images/IMG_8733.png';


function PictureGallery() {
    return (
        <div>
            <h1> Picture Gallery </h1>
            <Carousel>
                <div>
                    <img src={carouselImg1} alt='picture1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carouselImg2} alt='picture2'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={carouselImg3} alt='picture3' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <CarouselComp />
            <MediaComp />
            <DottedBackg />
        </div>
    )
}

export default PictureGallery
