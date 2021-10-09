import React, { useEffect, useState } from "react"
import { getUserLocalStorage } from "../storageAPI/api"

const FavoritesPage = () => {

    const [user, setUser] = useState({})

    useEffect(async function () {
        const user = await getUserLocalStorage()
        setUser(user)
    }, [])

    return (
        <div>{user.name}</div>
    )
}

export default FavoritesPage