import Home from './Home'
import React from 'react'
import NavBar from './NavBar';
import NewFood from './NewFood';
import RestaurantList from './RestaurantList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantList />
        </Route>
        <Route path="/newfood">
          <NewFood/>
        </Route>
        <Route path="*">
          <h1 className='main error'>Oops!!! <br/>404 NOT FOUND! <br/>Try Again...</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
