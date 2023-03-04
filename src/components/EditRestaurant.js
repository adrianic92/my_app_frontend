import React, {useState} from "react";

function EditRestaurant({restaurants}) {
    const [choice, setChoice] = useState(1)
    
    const allRestaurants = restaurants.map(restaurant => {
        return (
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
        )
    })

    function handleRestaurantChange(e) {
        setChoice(e.target.value)
    }


    return (
        <div>
            <select onChange={handleRestaurantChange}>{allRestaurants}</select>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" className='formChild' value={name} onChange={handleNameChange}/>
                <label>Dessert:</label>
                <input type="text" name="dessert" className='formChild' value={dessert} onChange={handleDessertChange}/>
                <select onChange={handleRestaurantChange}>{allRestaurants}</select>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditRestaurant