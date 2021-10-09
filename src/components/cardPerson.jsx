import React, { useEffect, useState } from "react"
import { getUserLocalStorage } from "../storageAPI/api"

const CardPerson = () => {
    const [user, setUser] = useState({})

    useEffect(async function() {
        const userData = await getUserLocalStorage()
        if(userData) setUser(userData)
    }, [])
    return (
        <div className="card">
            <img src={user.photo} className="card-img-top" alt="photo"/>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <div>
                    <p className="card-text">{user.age}</p>
                    <p className="card-text">{user.about}</p>
                    <a href="/" className="card-text">{user.social}</a>
                    <p className="card-text">{user.whatDoing && user.whatDoing.map(action => `${action} `)}</p>
                </div>
                <a href="#" className="btn btn-primary">Открыть</a>
                <a href="#" className="btn btn-primary">Избранное</a>
            </div>
        </div>
    )
}

export default CardPerson