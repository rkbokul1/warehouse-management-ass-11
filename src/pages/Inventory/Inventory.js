import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../sharedPage/Footer/Footer';
import Header from '../../sharedPage/Header/Header';

const Inventory = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            <Header />

            <div className='pt-5 mt-4'>
                <h2>Product: {inventoryId}</h2>
            </div>

            <Footer />
        </div>
    );
};

export default Inventory;