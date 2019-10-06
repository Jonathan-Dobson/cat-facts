import React from 'react';
import Home from './Home';
import Facts from './Facts';
import NotFound from './NotFound';
import FavImages from './FavImages';
import Navbar from './Navbar';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/facts" component = { Facts } />
        <Route path="/image" component = { FavImages } />
        <Route exact path="/" component = { Home } />
        <Route path = "/" component = { NotFound } />
      </Switch>

    </div>
  );
}

export default App;
