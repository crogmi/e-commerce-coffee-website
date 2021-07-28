import React from 'react';
import ProductList from '../../components/ProductList/ProductList';

const Order = () => {
    return (
        <div>
            <section className='page-section'>
                <h1 className='page-title'>Order here</h1>
                <hr />
                <ProductList />
            </section>
        </div>
    );
}

export default Order;