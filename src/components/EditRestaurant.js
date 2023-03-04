import React, {useState} from "react";

function EditRestaurant({restaurants}) {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState("")
    const [location, setLocation] = useState("")
    
    const allRestaurants = restaurants.map(restaurant => {
        return (
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
        )
    })

    function handleRestaurantChange(e) {
        setId(e.target.value)
        setName(restaurants[id]).name
        setDescription(restaurants[id]).description
        setRating(restaurants[id]).rating
        setLocation(restaurants[id]).location
    }

    function handleSubmit(e) {
        e.preventDefault()
        const updatedRestaurant = {
           name: name,
           description: description,
           rating: rating,
           location: location
        }
        updateRestaurant(updatedRestaurant)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    
    function handleRatingChange(e) {
        setRating(parseInt(e.target.value))
    }

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }

    return (
        <div>
            <select onChange={handleRestaurantChange}>{allRestaurants}</select>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" className='formChild' value={name} onChange={handleNameChange}/>
                <label>Description:</label>
                <input type="text" name="description" className='formChild' value={description} onChange={handleDescriptionChange}/>
                <label>Rating:</label>
                <input type="number" name="rating" min="1" max="10" className='formChild' value={rating} onChange={handleRatingChange}/>
                <label>Location:</label>
                <input type="text" name="location" className='formChild' value={location} onChange={handleLocationChange}/>
            </form>
        </div>
    )
}

export default EditRestaurant