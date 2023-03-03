import React from 'react'

function RestaurantList({restaurants}) {

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        )
    })

    return (
        <div>
            {allRestaurants}
        </div>
    )
}

export default RestaurantList