import React from 'react';
import '../styles/picturegallery.scss';
import CarouselComp from './CarouselComp';
import DottedBackg from './DottedBackg';
import MediaComp from './MediaComp';
import {BsDash} from 'react-icons/bs';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// 


function PictureGallery() {
    return (
        <div className='gallery'>
            <h3 className=''><BsDash />Picture Gallery<BsDash /></h3>
            <CarouselComp />
            <MediaComp />
            <DottedBackg />
        </div>
    )
}

export default PictureGallery
