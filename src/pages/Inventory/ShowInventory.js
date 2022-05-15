import React, { useState } from 'react';

const ShowInventory = (props) => {
    const { name, des, img, price, available } = props.stock;
    const [deliver, setDeliver] = useState();

    const handleDeliver = () =>{
        const result = available - 1;
        setDeliver(result);
    }

    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="card">
                    <img className="w-70 mx-auto" src={img} style={{ height:'300px' }} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{des}</h6>
                        <h5 className="card-text">Price: {price}</h5>
                        <h4>In Stock: {available} Deliver: {deliver}</h4>
                        <button onClick={handleDeliver}>Delivery</button>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default ShowInventory;