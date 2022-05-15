import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Hooks/firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../../Hooks/CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div id='home'>

            <Navbar className='bg-dark' expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand as={Link} className='text-white' to="/">BD-STOCK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Nav.Link as={CustomLink} className='text-white' to="/home">Home</Nav.Link>
                            <Nav.Link as={CustomLink} className='text-white' to="/inventory">Inventory</Nav.Link>
                            <Nav.Link as={CustomLink} className='text-white' to="/about">About</Nav.Link>
                            <Nav.Link as={CustomLink} className='text-white' to="/blog">Blog</Nav.Link>

                            {
                                user ?
                                    <>
                                        <Nav.Link as={CustomLink} className='text-white' to="/">Manage Item</Nav.Link>
                                        <Nav.Link as={CustomLink} className='text-white' to="/">Add Item</Nav.Link>
                                        <Nav.Link as={CustomLink} className='text-white' to="/">My Items</Nav.Link>
                                        <Nav.Link as={CustomLink} onClick={handleSignOut} className='text-white' to="/">Logout ({user.uid.slice(0, 5)})</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={CustomLink} className='text-white' to="/signup">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;