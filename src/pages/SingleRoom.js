import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    //this line is important if the room does not exist or is still loading
    if (!room) {
      return (
        <div className='error'>
          <h3>no such room could be found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      title,
      type,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...restImages] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${title} room`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {restImages.map((item, index) => (
              <img key={index} src={item} alt={type} />
            ))}
          </div>
          <div className='single-room-info'>
            <article className='description'>
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6> price: ${price}</h6>
              <h6>size: ${size}SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'pets not allowed'}</h6>
              <h6>{breakfast && 'free breakfast'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
