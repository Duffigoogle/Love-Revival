import React from 'react'
import HeaderNav from './Navbar';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import {IconContext} from "react-icons";
import '../styles/footer.scss';

function Footer() {
    let socialStyles = { 'margin-right': '10px' }; 

    let footerStyles = { backgroundColor: '#2d3fa2', backgroundImage: 'none', color: '#ffff'};
    return (
        <div className='footer'>
            <HeaderNav style={footerStyles}/>
            <div className='footer-bottom'>
                <div>
                    <p>&copy; Love Vision Foundation, Inc. 2020, We love spreading love</p>
                </div>
                <div className='footer-socials'>
                    <p>Follow us:</p>
                    
                        <div className='socials'>
                            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                                <ImFacebook2 style={socialStyles}/>
                                <FaInstagramSquare />
                            </IconContext.Provider>
                        </div>
                    
                
                </div>
            </div>
            
            
           
        </div>
    )
}

export default Footer
