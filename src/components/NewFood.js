import React, {useState} from 'react'

function NewFood({restaurants, addFood}) {
    const [name, setName] = useState("")
    const [dessert, setDessert] = useState("")
    const [restaurant, setRestaurant] = useState(1)
    const [show, setShow] = useState(true)

    

    function handleSubmit(e) {
        e.preventDefault()
        if (show) {
            return
        }
        const newFood = {
           food_name: name,
           dessert_pairing: dessert,
           restaurant_id: restaurant
        }
        addFood(newFood)
    }

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
        )
    })

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleRestaurantChange(e) {
        setShow(false)
        setRestaurant(e.target.value)
    }
    
    function handleDessertChange(e) {
        setDessert(e.target.value)
    }

    return (
        <div className='formParent'>
            <h1 className='center'>Add Food Here!</h1>
            <h3 className='center'>Add your favorite food with it's dessert pairing to any of the restaurants using this form.</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" className='formChild' value={name} onChange={handleNameChange}/>
                <label>Dessert:</label>
                <input type="text" name="dessert" className='formChild' value={dessert} onChange={handleDessertChange}/>
                <select onChange={handleRestaurantChange}>
                    {show ? <option value="none">Select a restaurant...</option> : null}
                    {allRestaurants}
                    </select>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewFood