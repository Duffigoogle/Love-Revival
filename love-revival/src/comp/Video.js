import React from 'react'
import ReactPlayer from 'react-player'
import worshipVideo from '../vidz/LoveRevivalVid.mp4'
import { CgPlayButtonO } from 'react-icons/cg';

function Video() {
    let iconStyles = { color: "red", fontSize: "1.5em" };
    // let wrapperStyles = { width: '500px', height:'600px'};
    return (
        <div className='player-wrapper'>
            <ReactPlayer 
                className='react-player'
                url={worshipVideo} 
                controls='true' 
                light='true'
                width='50%'
                height='60%'
                playIcon={<CgPlayButtonO style={iconStyles} />}  />
        </div>
    )
}

export default Video
