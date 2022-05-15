import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowInventory from './ShowInventory';

const Inventory = () => {
    const { inventoryId } = useParams();
    const [stock, setStock] = useState({})

    const url = `http://localhost:5000/stock/${inventoryId}`;
    
    useEffect( () =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setStock(data))
    } ,[])

    
    return (
        <div className='mt-5 pt-2 container'>
            <h2 className='mb-4'>Product: {stock.name}</h2>
            <ShowInventory stock={stock}></ShowInventory>
        </div>
    );
};

export default Inventory;