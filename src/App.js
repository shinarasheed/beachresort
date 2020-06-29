import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './components/Rooms';
import Room from './components/Room';
import { Error } from './pages/Error';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={Room} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
