import Home from './Home'
import React, {useState, useEffect} from 'react'
import NavBar from './NavBar';
import NewFood from './NewFood';
import RestaurantList from './RestaurantList';
import EditRestaurant from './EditRestaurant';
import NewRestaurant from './NewRestaurant';
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory()
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
  }, [])

  function updateRestaurant(updatedRestaurant) {
      const updatedRestaurants = restaurants.map( rest => {
          if (rest.id === updatedRestaurant.id) {
              return updatedRestaurant;
          }
          return rest;
        });
      setRestaurants(updatedRestaurants);
  }

  function handleDelete(restaurant) {
    fetch(`http://localhost:9292/restaurants/${restaurant.id}`, {
      method: "DELETE"})
    .then(resp => resp.json())
    .then(() => {
      const updatedRestaurants = restaurants.filter( rest => rest.id !== restaurant.id )
      setRestaurants(updatedRestaurants)
    })
  }

  function addFood(newFood) {
    fetch("http://localhost:9292/foods", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newFood)
    })
    .then(() => {
      history.push('/restaurants')
    })
  }

  function addRestaurant(newRestaurant) {
    fetch("http://localhost:9292/restaurants", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newRestaurant)
    })
    .then(resp => resp.json())
    .then(data => {
      setRestaurants([...restaurants, data])
      history.push('/restaurants')
    })
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/restaurants">
          <RestaurantList restaurants={restaurants} handleDelete={handleDelete}/>
        </Route>
        <Route path="/newfood">
          <NewFood restaurants={restaurants} addFood={addFood}/>
        </Route>
        <Route path="/newrestaurant">
          <NewRestaurant addRestaurant={addRestaurant}/>
        </Route>
        <Route path="/editrestaurant">
          <EditRestaurant restaurants={restaurants} updateRestaurant={updateRestaurant}/>
        </Route>
        <Route path="*">
          <h1 className='main error'>Oops!!! <br/>404 NOT FOUND! <br/>Try Again...</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
