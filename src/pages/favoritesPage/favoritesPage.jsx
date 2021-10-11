import React, { useEffect, useState } from "react"
import { getUserFavoriteLocalStorage } from "../../storageAPI/api"
import { User } from "../../components/user/user"
import SliderComponent from "../../components/customSlider/slider"

export default function FavoritesPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const userData = getUserFavoriteLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if (users.length === 0) {
        return <h2>Нет избранных</h2>
    }
    const arrayComponents = users.map((u) => (
        <User key={u.id} user={u} text={"favStyle"} />
    ))
    return (
        <>
            <SliderComponent >
                {arrayComponents}
            </SliderComponent>
        </>
    )
}
