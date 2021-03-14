import React from 'react';
import './../styles/nav.scss';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


// function Navigation() {
//     return (
//         <div>
//             <h1>
//                 I am a Nav
//             </h1>
//         </div>
//     )
// }

// export default Navigation
function HeaderNav() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
      <div className='Nav-header'>
        <div className='logo-header'>
          <img src='love-revival\src\img\LVF-Logo1-01.png' alt='logo'></img>
          <div className='nav-text'>
            <h5 className='top-text'>LOVE <span>VISION</span></h5>
            <h5 className='bottom-text'>FOUNDATION</h5>
          </div>
        </div>

        <Nav className="Full-Nav" variant="pills" activeKey="1" onSelect={handleSelect}>
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" title="Item">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" disabled>
              Mission
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Get Involved" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Join LVF</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">Partnership</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.3">Donations</NavDropdown.Item>
          </NavDropdown>
          <button>Connect</button>
        </Nav>
      </div>
      
    );
  }
  
//   render(<NavDropdownExample />);
export default HeaderNav