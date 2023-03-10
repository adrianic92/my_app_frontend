import React, {useState} from 'react'
import MenuList from './MenuList'

function RestaurantCard({restaurant, handleDelete}) {
    const {name, description, location, rating} = restaurant
    const [menu, setMenu] = useState(false)
    
    
    function handleClick() {
        handleDelete(restaurant)
    }

    return (
        <div className='restaurantParent'>
            <section className='Parent'>
                <h1>{name}</h1>
                <h3>Rating: {rating}/10</h3>
                <h2>{location}</h2>
                <h3>{description}</h3>
                <button className='delete' onClick={handleClick}>X</button>
                <button className='menu' onClick={() => setMenu(menu => !menu)}>View Menu</button>
                {menu ? <MenuList id={restaurant.id}/> : null}
            </section>
        </div>
    )
}

export default RestaurantCard