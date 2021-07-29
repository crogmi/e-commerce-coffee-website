import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
      <div className='home'>
        <div className='layer'>
          <div className='home-container'>
            <h1 className='home-title'>CoCo Coffee</h1>
            <Link className='enter-link' to={'/about'}>
              <p className='enter-desc'>Enter our shop</p>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;