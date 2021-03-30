import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
const FootNav = (props) => {
    
    return (
        <div style={props.style}>
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
                    <Nav.Link eventKey="3">
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
                <button className='btn'>Connect</button>
            </Nav>
        </div>
    )
}

export default FootNav
