import React from 'react';
import loader from '../images/gif/loading-arrow.gif';

const Spinner = () => {
  return (
    <div className='loading'>
      <h4>rooms data loading...</h4>
      <img src={loader} alt='loader' />
    </div>
  );
};

export default Spinner;
