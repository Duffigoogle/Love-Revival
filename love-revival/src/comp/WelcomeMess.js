import React from 'react';
import '../styles/welcome.scss';

function WelcomeMessage() {
    return (
        <div className='welcome-content'>
            <h1> Welcome Message</h1>
            <div className='welcome-message'>
                <div className='welcome-img welcome'>
                    <img src='love-revival\src\img\IMG_MAN1.png' alt='welcome-img'></img>
                </div>
                <div className='welcome-text welcome'>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor orci gravida dui tristique, eget
                        gravida diam ullamcorper. Morbi interdum ipsum turpis. Quisque pellentesque dolor id nunc
                        condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet enim volutpat non. Aenean non
                        aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nibh, egestas varius
                        elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu porta augue interdum in. Curabitur
                        lobortis dolor quis nibh ultricies, a pellentesque ipsum placerat.
                    </p>
                    <p>Mr Chika Elvis, Love Revival Cordinator</p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage
