import React from 'react';
import list from '../../products.json';
import { Link } from 'react-router-dom';

// Import images and CSS
import CoffeeImg from '../../ProductImages/coffee.jpg';
import LatteImg from '../../ProductImages/latte.jpg';
import EspressoImg from '../../ProductImages/espresso.jpg';
import ColdbrewImg from '../../ProductImages/cold-brew.jpg'
import './ProductList.css';

const ProductList = () => {
    
    const images = [LatteImg, CoffeeImg, ColdbrewImg, EspressoImg];

    const drinks = list.map((product) => (
        <div className='product-links'>
            <Link key={product._id} to={`/order/${product._id}`}>
                <img src={images[product.imageIndex]} alt=''/>
                <p className='product-name'>{product.name}</p>
            </Link>
        </div>
    ));

    return (
        <div className='product-list'>
            <h1>Drinks</h1>
            <div className='product-container'>
                {drinks}
            </div>
        </div>
    );
};

export default ProductList;