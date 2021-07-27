import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import App from '../../App';

const Order = (props) => {
    return (
        <div>
            <section className='page-section'>
                <h1 className='page-title'>Order here</h1>
                <hr />
                <ProductList drinks={props.drinks} />
            </section>
        </div>
    );
}

export default Order;