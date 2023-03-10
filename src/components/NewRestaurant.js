import React, {useState} from 'react'

function NewRestaurant({addRestaurant}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(1)
    const [location, setLocation] = useState("")

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

    function handleSubmit(e) {
        e.preventDefault()
        const newRestaurant = {
            name: name,
            description: description,
            rating: rating,
            location: location
         }
         
         addRestaurant(newRestaurant)
    }

    return (
        <div className="formParent">
            <h1 className="center">Create A Restaurant Here</h1>
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

export default NewRestaurant