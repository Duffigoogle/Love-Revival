import React from 'react';
import '../styles/watchlove.scss';
import blowingFlutePic from '../images/IMG_6930.png';
import prayingPic from '../images/IMG_7146.png';

function WatchLoveRev() {
    return (
        <div className='watchlove-section'>
            <img src={blowingFlutePic} alt='flute-img'></img>
            <video src=''></video>
            <img src={prayingPic} alt='praying-img'></img>
        </div>
    )
}

export default WatchLoveRev
