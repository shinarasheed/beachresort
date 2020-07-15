import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../context';

//this is how to access context in functional components

import Spinner from './Spinner';
const RoomsContainer = () => {
  return (
    <RoomContext.Consumer>
      {(context) => {
        const { loading, sortedRooms, rooms } = context;
        if (loading) {
          return <Spinner />;
        }
        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomContext.Consumer>
  );
};

export default RoomsContainer;
