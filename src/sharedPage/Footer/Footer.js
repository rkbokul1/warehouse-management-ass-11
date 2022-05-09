import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='mt-5'>
            <p className='text-gray'>Copyrights Reserve &copy;BD-STOCK {date}</p>
        </div>
    );
};

export default Footer;