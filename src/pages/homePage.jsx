import { Row } from "antd"
import React, { useEffect, useState } from "react"
import CardPerson from "../components/cardPerson/cardPerson"
import style from "../components/cardPerson/cardPerson.module.css"
import { getUsersLocalStorage, setUsersLocalStorage } from "../storageAPI/api"

const HomePage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userData = getUsersLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if(!users) return "loading"

    function clickFavoriteUserHandler(id){
        const mapUsers = users.map(u=> u.id === id ? {...u, favorite: !u.favorite}: u)
        setUsers(mapUsers)
        setUsersLocalStorage(mapUsers)
    }
    
    return (
        <Row gutter={10} justify="center" className={style.common}>
            {users.map( u => <CardPerson user={u} key={u.id} onClickFavorite={clickFavoriteUserHandler} />)}
        </Row>
    )
}

export default HomePage
