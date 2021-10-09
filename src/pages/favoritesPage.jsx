import React from "react"
import { useUser } from "../components/utils/hooks/useUser"

const FavoritesPage = () => {
    
    const user = useUser()
    if(!user) {
        return "loading"
    }
    return (
        <>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.about}</div>
        </>
    )
}

export default FavoritesPage