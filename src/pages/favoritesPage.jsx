import React, { useEffect, useState } from "react"
import { getUserLocalStorage } from "../storageAPI/api"

const FavoritesPage = () => {
    
    const [user, setUser] = useState("loading")
    
    useEffect(()=>{
        const userData = getUserLocalStorage()
        if(userData) setUser(userData)

    }, [])


    if(user === "loading") {
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