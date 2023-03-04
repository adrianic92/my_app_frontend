import React from 'react'
import RestaurantCard from './RestaurantCard'

function RestaurantList({restaurants, handleDelete}) {

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} handleDelete={handleDelete}/>
        )
    })

    return (
        <div>
            {allRestaurants}
        </div>
    )
}

export default RestaurantList