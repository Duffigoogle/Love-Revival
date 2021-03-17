import React from 'react'
import '../styles/mediacomp.scss'
import { FaMicrophoneAlt, } from 'react-icons/fa'
import { SiYoutubetv } from 'react-icons/si'

function MediaComp() {
    let mediaStyles = { width: '160px', height: '160px'}
    return (
        <div className='media'>
            
            <div className='box left'>
                <div className='audio-sect'>
                    <FaMicrophoneAlt style={mediaStyles} />
                </div>
                <div className='sub-box'>
                    <p>Listen to our <br />
                    live Podcast
                    </p>
                    <button>Click Here!</button>
                </div>
            </div>

            <div className='box right'>
                <div className='video-sect'>
                    {/* <FaDesktop />
                    <FaYoutube /> */}
                    <SiYoutubetv style={mediaStyles} />
                </div>
                <div className='sub-box'>
                    <p>Watch us on <br /> youtube</p>
                    <button>Click Here!</button>
                </div>
            </div>
        </div>
    )
}

export default MediaComp
