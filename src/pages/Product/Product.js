import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Product = (props) => {

    const { id, name, img, cmnt } = props.stck;    
    const navigate = useNavigate();

    const handleInventory = id =>{
        navigate(`/inventory/${id}`)
        
    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>

            <Card className='pt-2' style={{height:'400'}}>
                <Card.Img className='mx-auto' style={{ width: '120px', height:'120px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name:{id} {name} </Card.Title>
                    <Card.Text>
                        {cmnt.slice(0,80)}
                        <p className='text-success'>see more</p>
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <button onClick={() => handleInventory(name)} className='btn btn-primary'>Manage</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;