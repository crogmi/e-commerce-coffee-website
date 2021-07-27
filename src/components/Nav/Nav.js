import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link className='text-link' to='/about'>
                    <li className='list-items'>About</li>
                </Link>
                <Link className='text-link' to='/order'>
                    <li className='list-items'>Order</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;