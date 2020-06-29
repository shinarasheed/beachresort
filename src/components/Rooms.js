import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Banner from './Banner';

const Rooms = () => {
  return (
    <Hero hero='roomsHero'>
      <Banner title='our rooms'>
        <Link to='/' className='btn-primary'>
          back to home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
