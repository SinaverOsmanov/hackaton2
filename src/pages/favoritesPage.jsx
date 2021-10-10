import React, { useEffect, useState } from "react"
import { getUserFavoriteLocalStorage } from "../storageAPI/api"
import { User } from "../components/user"

export default function FavoritesPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const userData = getUserFavoriteLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if (users.length === 0) {
        return <h2>Нет избранных</h2>
    }

    return (
        <>
            {users.map((u) => (
                <User key={u.id} user={u} text={"favStyle"} />
            ))}
        </>
    )
}
