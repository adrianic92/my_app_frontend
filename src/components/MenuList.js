import React from 'react'
import FoodCard from './FoodCard'

function MenuList({restaurant, handleFoodDelete}) {

    const {foods} = restaurant
    const allFoods = foods.map( food => {
        return (
            <FoodCard key={food.id} food={food} handleFoodDelete={handleFoodDelete}/>
        )
    })

    return (
        <div>{allFoods}</div>
    )
}

export default MenuList