import React from 'react';
import '../styles/picturegallery.scss';
import CarouselComp from './CarouselComp';
import DottedBackg from './DottedBackg';
import MediaComp from './MediaComp';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// 


function PictureGallery() {
    return (
        <div>
            <h1> Picture Gallery </h1>
            <CarouselComp />
            <MediaComp />
            <DottedBackg />
        </div>
    )
}

export default PictureGallery
