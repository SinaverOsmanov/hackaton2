import { Row } from "antd"
import React, { useEffect, useState } from "react"
import CardPerson from "../components/cardPerson"
import { getUsersLocalStorage } from "../storageAPI/api"
import style from "../components/cardPerson.module.css"

const HomePage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userData = getUsersLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if (!users) {
        return "loading"
    }
    console.log(users)
    return (
        <Row gutter={10} justify="center" className={style.common}>
            {users.map((u) => (
                <CardPerson user={u} key={u.id} />
            ))}
        </Row>
    )
}

export default HomePage
