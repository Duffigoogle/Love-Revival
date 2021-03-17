import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../styles/nav.scss';
// import RiArrowDropDownLine from 'react-icons/ri';
import NavLogo from './NavLogo';
import Navig from './Navig';


function HeaderNav() {
  
    return (
        <div className='Nav-header'>
            <NavLogo />
            <Navig />
        </div>
      
    );
  }
  
//   render(<NavDropdownExample />);
export default HeaderNav