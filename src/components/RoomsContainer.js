import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomContext } from '../context';

//this is how to access context in functional components
//i could have used a class based component
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
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomContext.Consumer>
  );
};

export default RoomsContainer;
