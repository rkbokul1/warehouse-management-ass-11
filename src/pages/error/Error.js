import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-danger'>404</h1>            
            <h2>Page not Found</h2>
            <h2>back to <Link to='/home'>Home</Link></h2>
        </div>
    );
};

export default Error;