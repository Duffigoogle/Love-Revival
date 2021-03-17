import React from 'react'
import ReactPlayer from 'react-player'
import worshipVideo from '../vidz/LoveRevivalVid.mp4'
import { CgPlayButtonO } from 'react-icons/cg';
import '../styles/video.scss';

function Video() {
    let iconStyles = { color: "red", fontSize: "2em", width: '150px', height: '150px' };
    // let wrapperStyles = { width: '500px', height:'600px'};
    return (
        <div className='player-wrapper'>
            <div className='text'>Watch Love Revival 2019 Concert</div>
            <ReactPlayer 
                className='react-player'
                url={worshipVideo} 
                controls='true' 
                light='true'
                width='100%'
                height='100%'
                playIcon={<CgPlayButtonO style={iconStyles} />}  />
        </div>
    )
}

export default Video
