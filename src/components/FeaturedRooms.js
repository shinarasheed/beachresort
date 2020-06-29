import React, { Component } from 'react';
import { RoomContext } from '../context';
import Spinner from './Spinner';
import Room from './Room';
import { Title } from './Title';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading } = this.context;

    return (
      <div>
        <section className='featured-rooms'>
          <Title title='featured rooms' />
          <div className='featured-rooms-center'>
            {loading ? (
              <Spinner />
            ) : (
              featuredRooms.map((room) => <Room key={room.id} room={room} />)
            )}
          </div>
        </section>
      </div>
    );
  }
}
