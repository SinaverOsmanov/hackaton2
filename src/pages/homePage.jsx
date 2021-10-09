import { Row, Col } from "antd"
import React, { useEffect, useState } from "react"
import CardPerson from "../components/cardPerson"
import { getUsersLocalStorage } from "../storageAPI/api"

const HomePage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userData = getUsersLocalStorage()
        if(userData) setUsers(userData)
    }, [])
    
    if(!users) {
        return "loading"
    }

    return (
        <Row gutter={10} justify="space-between">
            {users.map(u=><CardPerson user={u} key={u.id}/>)}
        </Row>
    )
}

export default HomePage