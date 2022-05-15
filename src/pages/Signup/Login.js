import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/icon/google.png';
import github from '../../images/icon/github.png';
import auth from '../../firebase.init';


const Login = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const handleGoogleSinIn = () => {
        signInWithGoogle();
    };

    const handleGithubSignIn = () =>{
        signInWithGithub();
    }
    
    if(user){
        navigate('/')
    }

    return (
        <div className='w-50 mx-auto pt-5 mt-5'>
            <h2>Login Page</h2>
            <Container>

                <Form onSubmit={handleLogin} className='text-start'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name='password' required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='text-start mt-2 '><strong>New Here? <Link to='/signup'>Register Now</Link></strong></p>
                <div id='signinWithGoogle' className='my-5'>
                    <button onClick={handleGoogleSinIn} className='mx-2 btn btn-success'><img className='me-2' src={google} alt="" />Signin Witg Google</button>
                    <button onClick={handleGithubSignIn} className='mx-2 btn btn-success'><img className='me-2' src={github} alt="" />Signin Witg Github</button>
                </div>
            </Container>
        </div>
    );
};

export default Login;