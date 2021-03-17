import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/nav.scss';

function Navig() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <div>
            <style>
                {
                `.btn {
                        background: linear-gradient(
                            94.14deg,
                            #f30b0b -12.72%,
                            rgba(15, 11, 182, 0.92) 115.37%
                        );
                        border-radius: 10px;
                        width: 100px;
                        height: 35px;
                        color: white;
                }`
                }
            </style>
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

export default Navig
