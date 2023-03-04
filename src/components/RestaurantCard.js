import React, {useState, useEffect} from 'react'
import Menu from './Menu'

function RestaurantCard({restaurant, handleDelete}) {
    const {name, description, location} = restaurant
    const [menu, setMenu] = useState(false)
    const [foods, setFoods] = useState([])
    
    function handleClick() {
        handleDelete(restaurant)
    }

    useEffect( () => {
        fetch(`http://localhost:9292/restaurants/${restaurant.id}/foods`)
        .then(resp => resp.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className='restaurantParent'>
            <section className='Parent'>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h3>{description}</h3>
                <button className='delete' onClick={handleClick}>X</button>
                <button className='menu' onClick={() => setMenu(!menu)}>View Menu</button>
                {menu ? <Menu id={restaurant.id} foods={foods}/> : null}

            </section>
        </div>
    )
}

export default RestaurantCard