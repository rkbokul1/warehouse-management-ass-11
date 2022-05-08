import React from 'react';
import useStocks from '../../Hooks/useStocks';
import Product from '../Home/Product/Product';

const Products = () => {
    const [stock] = useStocks();

    return (
        <div className='container mt-5'>
            <h2>this is product page</h2>
            <div className="row g-4 mt-5">
                {
                    stock.slice(0, 6).map(stck => <Product
                        key={stck.id}
                        stck={stck}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;