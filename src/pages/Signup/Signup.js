import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='mt-5 pt-5 w-50 mx-auto'>
            <Container>
                <h2>Sign Up</h2>
                <Form className='text-start'>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name='name' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='text-start mt-2 '><strong>Already Register? <Link to='/login'>Login Now</Link></strong></p>
            </Container>

        </div>
    );
};

export default Signup;