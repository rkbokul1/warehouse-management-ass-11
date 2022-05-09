import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Hooks/firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/icon/google.png';
import github from '../../images/icon/github.png';
import { useState } from 'react';


const Signup = () => {

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    };

    const handleGoogleSinIn = () => {
        signInWithGoogle();
    };

    const handleGithubSignIn = () =>{
        signInWithGithub();
    }

    if(user){
        navigate('/home')
    }

    return (
        <div className='mt-5 pt-5 w-50 mx-auto'>
            <Container>
                <h2>Sign Up</h2>
                <Form onSubmit={handleSubmit} className='text-start'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" name='name' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" name='password' required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>

                <p className='text-start mt-2 '><strong>Already Register? <Link to='/login'>Login Now</Link></strong></p>

                <div id='signinWithGoogle' className='my-5'>
                    <button onClick={handleGoogleSinIn} className='mx-2 btn btn-success'><img className='me-2' src={google} alt="" />Signin Witg Google</button>
                    <button onClick={handleGithubSignIn} className='mx-2 btn btn-success'><img className='me-2' src={github} alt="" />Signin Witg Github</button>
                </div>

            </Container>

        </div>
    );
};

export default Signup;