import React from 'react';
import { Link } from 'react-router-dom';
import CoffeeImg from './TileImages/coffee.jpg';
import LatteImg from './TileImages/latte.jpg';
import EspressoImg from './TileImages/espresso.jpg';
import ColdbrewImg from './TileImages/cold-brew.jpg'
import './Tile.css';

const Tile = (props) => {
    
    const name = props.obj.name;
    const itemNumber = props.obj.itemNumber;

    const images = {
        'Coffee': CoffeeImg,
        'Espresso': EspressoImg,
        'Latte': LatteImg,
        'Cold Brew': ColdbrewImg
    };

    const array = [LatteImg, CoffeeImg, ColdbrewImg, EspressoImg];
    
    return (
        <div className='tile-container'>
            <Link to={`/shop/${itemNumber}`}>
                <img src={array[itemNumber]} 
                     alt={images.name}
                     key={itemNumber + 1} />
            </Link>
            <h3 className='tile' key={itemNumber + 1}>
                {name}
            </h3>
        </div>
    );
};

export default Tile;