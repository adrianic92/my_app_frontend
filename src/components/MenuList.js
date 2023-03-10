import React, {useState, useEffect} from 'react'
import Menu from './Menu'

function MenuList({id}) {
    const [foods, setFoods] = useState([])

    useEffect( () => {
        fetch(`http://localhost:9292/restaurants/${id}/foods`)
        .then(resp => resp.json())
        .then(data => setFoods(data))
    }, [])


    return (
        <Menu id={id} foods={foods}/>
    )
}

export default MenuList