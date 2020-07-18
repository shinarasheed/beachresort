import React from 'react';
import { Link } from 'react-router-dom';
//the default is a fallback incase we cant get our image
import defaultImg from '../images/room-1.jpeg';
import PropTypes from 'prop-types';

const Room = ({ room }) => {
  const { title, slug, images, price } = room;
  const mainImage = images[0];
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={mainImage || defaultImg} alt='single room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>
          features
        </Link>
      </div>
      <p className='room-info'>{title}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    //images is an array of string of images
    images: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Room;
