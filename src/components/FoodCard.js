import React from 'react'

function FoodCard({food, handleFoodDelete}) {

    function handleClick() {
        handleFoodDelete(food)
    }
    return (
        <p key={food.id} style={{fontSize: "large"}}>       
            Entree: {food.food_name} | Dessert Pairing: {food.dessert_pairing} | ID: {food.id} &nbsp;
            <button className='remove' onClick={handleClick}>X</button>
        </p>
    )
}

export default FoodCard 