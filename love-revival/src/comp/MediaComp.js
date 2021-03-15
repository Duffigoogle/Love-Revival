import React from 'react'
import '../styles/mediacomp.scss'

function MediaComp() {
    return (
        <div className='media'>
            
            <div className='left box'>
                <div className='audio-sect'>
                    Mic
                </div>
                <div>
                    <p>Listen to our <br />
                    live Podcast
                    </p>
                    <button>Click Here!</button>
                </div>
            </div>

            <div className='right box'>
                <div className='video-sect'>
                    Desktop
                </div>
                <div>
                    <p>Watch us on <br /> youtube</p>
                    <button>Click Here!</button>
                </div>
            </div>
        </div>
    )
}

export default MediaComp
