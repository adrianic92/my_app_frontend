import React, {useState} from "react";

function EditRestaurant({restaurants, updateRestaurant}) {
    const [id, setId] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(1)
    const [location, setLocation] = useState("")
    const [show, setShow] = useState(true)
    
    const allRestaurants = restaurants.map(restaurant => {
        return (
            <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
        )
    })

    function handleRestaurantChange(e) {
        setShow(false)
        const id = parseInt(e.target.value)
        const restaurant = restaurants.find( x => x.id === id )
        setId(id)
        setName(restaurant.name)
        setDescription(restaurant.description)
        setRating(restaurant.rating)
        setLocation(restaurant.location)
    }

    function handleSubmit(e) {
        
        e.preventDefault()
        if (show) {
            return
        }
        console.log(name, description, rating, location)
        fetch(`http://localhost:9292/restaurants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                rating: parseInt(rating),
                location: location,
            }),
        })
        .then(resp => resp.json())
        .then( updatedRestaurant => updateRestaurant(updatedRestaurant));
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
        <div className="formParent">
            <h1 className="center">Edit A Restaurant Here</h1>
            <select className="formChild" onChange={handleRestaurantChange}>
                {show ? <option value="none">Select a restaurant...</option> : null}
                {allRestaurants}
            </select>
            <form className="form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" className='formChild' value={name} onChange={handleNameChange}/>
                <label>Description:</label>
                <input type="text" name="description" className='formChild' value={description} onChange={handleDescriptionChange}/>
                <label>Rating:</label>
                <input type="number" name="rating" min="1" max="10" className='formChild' value={rating} onChange={handleRatingChange}/>
                <label>Location:</label>
                <input type="text" name="location" className='formChild' value={location} onChange={handleLocationChange}/>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditRestaurant