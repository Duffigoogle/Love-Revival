import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../styles/nav.scss';
// import RiArrowDropDownLine from 'react-icons/ri';
import NavLogo from './NavLogo';
import Navig from './Navig';
import styled from 'styled-components'

const Div = styled.div`
    background-image: linear-gradient(
    to right,
    rgba(0, 0, 4, 0.652),
    rgb(0, 0, 0) 50%
  );
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 100px; 
`

const HeaderNav = (props) => {
  
    return (
        <Div className='Nav-header' style={props.style}>
            <NavLogo />
            <Navig />
        </Div>
      
    );
  }
  
//   render(<NavDropdownExample />);
export default HeaderNav