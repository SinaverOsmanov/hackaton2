import { useEffect, useState } from "react"
import { getUserLocalStorage } from "../../../storageAPI/api"


export function useUser() {

    const [user, setUser] = useState()
    
    useEffect(async function() {
        const userData = await getUserLocalStorage()
        if(userData) setUser(userData)
    }, [])

    return user
}

