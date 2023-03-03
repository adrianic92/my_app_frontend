import Home from './Home'
import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import NewFood from './NewFood';
import RestaurantList from './RestaurantList';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
  }, [])



  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantList restaurants={restaurants} />
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
