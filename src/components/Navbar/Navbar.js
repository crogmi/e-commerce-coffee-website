import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link className='home-link text-links' to='/'>
                <i className="fas fa-coffee home-icon"></i>
            </Link>
            <div className='page-links'>
                <ul className='nav-links'>
                    <Link className='text-links' to='/about'>
                        <li className='list-items'>About</li>
                    </Link>
                    <Link className='text-links' to='/order'>
                        <li className='list-items'>Order</li>
                    </Link>
                </ul>
                <button className='nav-cart snipcart-checkout'>
                    <i className="fas fa-shopping-cart"></i>
                    <span className='cart-info snipcart-total-price'>$0.00</span>
                    <div className='cart-info'>
                        (<span className='snipcart-items-count'>0</span>)
                    </div>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;