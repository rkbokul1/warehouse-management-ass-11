import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Product = (props) => {

    const { name, img, des, price } = props.stck;    
    const navigate = useNavigate();

    const handleInventory = id =>{
        navigate(`/inventory/${id}`)
        
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>

            <Card className='pt-2' style={{height:'500'}}>
                <Card.Img className='mx-auto w-100' style={{ height:'200px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name} </Card.Title>
                    <Card.Text>
                        {des?.slice(0,50)}
                    </Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <button onClick={() => handleInventory(name)} className='btn btn-primary'>Manage</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;