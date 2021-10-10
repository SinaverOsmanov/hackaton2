import React, { useEffect, useState } from "react"
import { getUserFavoriteLocalStorage } from "../storageAPI/api"
import { User } from "../components/user"
import SliderComponet from "../components/customSlider/slider"

export default function FavoritesPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const userData = getUserFavoriteLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if (users.length === 0) {
        return <h2>Нет избранных</h2>
    }
    const arrayComponets = users.map((u) => (
        <User key={u.id} user={u} />
    ))
    console.log(arrayComponets)
    return (
        <>
            {/* {users.map((u) => (
                <User key={u.id} user={u} />
            ))} */}
            <SliderComponet arrayComponents={arrayComponets} />
        </>
    )
}
