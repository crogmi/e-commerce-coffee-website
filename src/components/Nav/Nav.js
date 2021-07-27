import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link className='text-links' to='/'>
                <h3 className='nav-logo'>Logo</h3>
            </Link>
            <ul className='nav-links'>
                <Link className='text-links' to='/about'>
                    <li className='list-items'>About</li>
                </Link>
                <Link className='text-links' to='/order'>
                    <li className='list-items'>Order</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;