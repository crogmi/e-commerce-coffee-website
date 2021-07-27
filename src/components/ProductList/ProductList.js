import React from 'react';
import Tile from '../Tile/Tile';

const ProductList = (props) => {
    
    return (
        <div className='tile-container'>
            {props.drinks.map((obj, index) => (
                <Tile key={index}
                      obj={obj} />
            ))}
        </div>
    );
};

export default ProductList;