import React from 'react';
import useStocks from '../../Hooks/useStocks';
import Product from '../Product/Product';

const Products = () => {
    const [stock] = useStocks();

    return (

        <div className='container mt-4 pt-5'>
            <h2>Inventory</h2>
            <div className="row g-4 mt-2">
                {
                    stock.slice(0, 6).map(stck => <Product
                        key={stck._id}
                        stck={stck}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;