import React from 'react'
import '../styles/aboutLove.scss';
import aboutImg from '../images/IMG_6932.png';
import {BsDash} from 'react-icons/bs';


function AboutLove() {
    return (
        <div className='about-section'>
            <h3><BsDash/>About Love Revival<BsDash/></h3>
            <section className='about-content'>
                <div className='about-text about'>
                    <p> This arm focuses on spiritual awakening of the love of God in the
                        lives of youths in our community (keeping oneself unspotted from
                        the world). It is a night or evening of worship and a brief word of love.

                        We partner with youth minisrty churches, having volunteers who
                        serve either in the choir, technical, media / ICT, ushering, publicity,
                        security, e.t.c to bring the event to pass. However, as the souls we
                        invited encounter God in worship and give their life to Christ, we
                        direct them to the churches we partner with for their spiritual
                        growth while we enroll them into our Love Reform Program for their
                        social change and integration back to society 
                    </p>
                </div>
                <div className='about-img about'>
                    <img src={aboutImg} alt='about-img'></img>
                </div>
            </section>
        </div>
    )
}

export default AboutLove
