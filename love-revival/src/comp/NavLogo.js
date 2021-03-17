import React from 'react';
import companyLogo from '../images/LVF-Logo1-01.png';
import '../styles/nav.scss';

function NavLogo() {
    return (
        <div className='logo-header'>
          <img src={companyLogo} alt='logo'></img>
          <div className='nav-text'>
            <h5 className='top-text'>LOVE <span>VISION</span></h5>
            <h5 className='bottom-text'>FOUNDATION</h5>
          </div>
        </div>
    )
}

export default NavLogo
