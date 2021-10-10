import { Row } from "antd"
import React, { useContext, useState } from "react"
import CardPerson from "../components/cardPerson/cardPerson"
import style from "../components/cardPerson/cardPerson.module.css"
import { favoriteReducerAction } from "../reducers/favoriteReducer"
import { getUserFavoriteLocalStorage, getUsersLocalStorage, setUsersLocalStorage } from "../storageAPI/api"
import { Context } from "../storageAPI/favoriteContext"

const HomePage = () => {
    const [users, setUsers] = useState(() => { return getUsersLocalStorage() })
    const {dispatch} = useContext(Context)

    function clickFavoriteUserHandler(id) {
        const mapUsers = users.map(u => u.id === id ? { ...u, favorite: !u.favorite } : u)
        setUsers(mapUsers)
        setUsersLocalStorage(mapUsers)
        dispatch(favoriteReducerAction(getUserFavoriteLocalStorage().length))
    }

    if (!users) return "loading"

    return (
        <Row gutter={10} justify="center" className={style.common}>
            {users.map(u => <CardPerson user={u} key={u.id} onClickFavorite={clickFavoriteUserHandler} />)}
        </Row>
    )
}

export default HomePage
