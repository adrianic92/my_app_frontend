import React from 'react'

function Home() {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                Welcome to the Restaurants Home Page!<br/>
                Do you like food? Because WE do!!!<br/>
                Click on the links above to check out some restaurants and food.
            </h1>
            <img alt='random food' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{width: "50%", marginLeft: "auto", marginRight: "auto", display: "block"}}/>
        </div>
    )
}

export default Home;