import React from 'react'
import Nav from './Nav';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagramSquare } from 'react-icons/fa';
import {IconContext} from "react-icons";

function Footer() {
    return (
        <div>
            <Nav />
            <hr />
            <div>
                <p>&copy; Love Vision Foundation, Inc. 2020, We love spreading love</p>
            </div>
            <div>
                <p>Follow us:</p>
                <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
                    <div>
                        <ImFacebook2 />
                        <FaInstagramSquare />
                    </div>
                </IconContext.Provider>
               
            </div>
            
           
        </div>
    )
}

export default Footer
