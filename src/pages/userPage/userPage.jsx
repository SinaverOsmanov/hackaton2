import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { User } from "../../components/user"
import { getUserByIdLocalStorage } from "../../storageAPI/api"

const UserPage = () => {
    const { userId } = useParams()

    const [user, setUser] = useState()
    useEffect(() => {
        const userData = getUserByIdLocalStorage(userId)
        if (userData) setUser(userData)
    }, [userId])

    if (!user) return "loading"

    return <User user={user} text={"userStyle"} />
}

export default UserPage
