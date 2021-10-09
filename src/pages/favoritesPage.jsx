import React, { useEffect, useState } from "react"
import { getUserLocalStorage } from "../storageAPI/api"

const FavoritesPage = () => {

    const [user, setUser] = useState({})

    useEffect(async function() {
        const userData = await getUserLocalStorage()
        if(userData) setUser(userData)
    }, [])

    return (
        <div>{user.name}</div>
    )
}

export default FavoritesPage