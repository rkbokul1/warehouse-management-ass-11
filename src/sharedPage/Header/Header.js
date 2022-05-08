import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import Banner from '../../pages/Banner/Banner';

const Header = () => {

    return (
        <div>

            {/* main header */}
            <Navbar className='bg-dark' expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand className='text-white' href="#home">BD-STOCK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#home">Inventory</Nav.Link>
                            <Nav.Link className='text-white' href="#home">About</Nav.Link>
                            <Nav.Link className='text-white' href="#home">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* carousel */}
            <Banner/>

        </div>
    );
};

export default Header;