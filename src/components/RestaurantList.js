import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({restaurants, handleDelete, handleFoodDelete}) {

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} handleDelete={handleDelete} handleFoodDelete={handleFoodDelete}/>
        )
    })

    return (
        <div>
            {allRestaurants}
        </div>
    )
}

export default RestaurantList