import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import './OrderPage.css';

const Order = () => {
    return (
        <div className='order-page'>
            <h1 className='order-title'>Drinks</h1>
            <div className='product-container'>
                <ProductList />
            </div>
        </div>
    );
}

export default Order;