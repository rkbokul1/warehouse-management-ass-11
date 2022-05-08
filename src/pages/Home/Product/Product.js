import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {

    console.log(props)
    const { id, name, img, cmnt } = props.stck;

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>

            <Card style={{height:'350px'}}>
                <Card.Img className='mx-auto' style={{ width: '120px', height:'120px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name:{id} {name} </Card.Title>
                    <Card.Text>
                        {cmnt.slice(0,80)}
                        <p className='text-success'>see more</p>
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Product;