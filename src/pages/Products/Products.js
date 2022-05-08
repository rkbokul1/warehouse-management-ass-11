import React from 'react';
import useStocks from '../../Hooks/useStocks';
import Footer from '../../sharedPage/Footer/Footer';
import Header from '../../sharedPage/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [stock] = useStocks();

    return (

        <div id='inventory'>
            <Header/>

            <div className='container pt-5 mt-5'>
                <h2>Inventory</h2>
                <div className="row g-4 mt-2">
                    {
                        stock.slice(0, 6).map(stck => <Product
                            key={stck.id}
                            stck={stck}
                        ></Product>)
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;