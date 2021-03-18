import React from 'react';
import '../styles/welcome.scss';
import welcomeImg from '../images/IMG_MAN1.png';
import {ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
// import {GoDash} from 'react-icons/go';
import {BsDash} from 'react-icons/bs';

function WelcomeMessage() {
    let firstquoteStyles = { width: '100px', height: '100px', color: 'rgb(213, 210, 210)'};
    let secondquoteStyles = { width: '100px', height: '100px', color: 'rgb(213, 210, 210)', position: 'absolute',
    bottom: '45', right: '0', 'z-index': '-10'};
    return (
        <div className='welcome-content'>
            <h3><BsDash />Welcome Message<BsDash /></h3>
            <div className='welcome-message'>
                <div className='welcome-img welcome'>
                    <img src={welcomeImg} alt='welcome-img'></img>
                </div>
                <div className='welcome-text welcome'>
                    <ImQuotesLeft  style={firstquoteStyles}/>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor orci gravida dui tristique, eget
                        gravida diam ullamcorper. Morbi interdum ipsum turpis. Quisque pellentesque dolor id nunc
                        condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet enim volutpat non. Aenean non
                        aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nibh, egestas varius
                        elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu porta augue interdum in. Curabitur
                        lobortis dolor quis nibh ultricies, a pellentesque ipsum placerat. <br /> <br /> Mr Chika Elvis, Love Revival Cordinator
                    </p>
                    {/* <br />
                    <p>Mr Chika Elvis, Love Revival Cordinator</p> */}
                    <ImQuotesRight style={secondquoteStyles}/>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage
