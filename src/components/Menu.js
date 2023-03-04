import React from "react";

function Menu({foods}) {
    
    const allFoods = foods.map( food => {
        return (
                <p key={food.id} style={{fontSize: "large"}}>Entree: {food.food_name} | Dessert Pairing: {food.dessert_pairing}</p>
        )
    })

    return (
        <div>{allFoods}</div>
    )
}

export default Menu