import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import { Error } from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/room/:id' component={Room} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
