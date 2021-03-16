import React from 'react'
import '../styles/mediacomp.scss'
import { FaMicrophoneAlt, FaDesktop, FaYoutube } from 'react-icons/fa'
import { SiYoutubetv } from 'react-icons/si'

function MediaComp() {
    return (
        <div className='media'>
            
            <div className='left box'>
                <div className='audio-sect'>
                    <FaMicrophoneAlt />
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
                    <FaDesktop />
                    <FaYoutube />
                    <SiYoutubetv />
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
