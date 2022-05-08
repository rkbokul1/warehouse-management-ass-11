import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div id='home'>

            {/* main header */}
            <Navbar className='bg-dark' expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand className='text-white' href="#home">BD-STOCK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className='text-white' to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="/home">About</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="/home">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;