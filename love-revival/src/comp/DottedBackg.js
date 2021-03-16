import React from 'react'
import dottedBackg from '../images/DottedBackg.svg';
import '../styles/dottedBackground.scss';

function DottedBackg() {
    return (
        <div className='dotted'>
            <img src={dottedBackg} alt='dottedbackground'></img>
        </div>
    )
}

export default DottedBackg
