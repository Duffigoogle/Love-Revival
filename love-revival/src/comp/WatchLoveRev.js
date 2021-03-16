import React from 'react';
// import { PageHeader } from "react-bootstrap/";
import '../styles/watchlove.scss';
import blowingFlutePic from '../images/IMG_6930.png';
import prayingPic from '../images/IMG_7146.png';
// import worshipVideo from '../vidz/LoveRevivalVid.mp4'
import Video from '../comp/Video';




function WatchLoveRev() {
    return (
        <div className='watchlove-section'>
            <img src={blowingFlutePic} alt='flute-img'></img>
            {/* <video src={worshipVideo} width="500" height="500" controls="controls" playsInline muted autoplay="true"  /> */}
            <Video />        
            <img src={prayingPic} alt='praying-img'></img>
            
        </div>
    )
}

export default WatchLoveRev
