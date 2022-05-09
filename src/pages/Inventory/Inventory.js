import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams();
    return (
        <div className='mt-5 pt-5'>
            <h2>Product: {inventoryId}</h2>
        </div>
    );
};

export default Inventory;