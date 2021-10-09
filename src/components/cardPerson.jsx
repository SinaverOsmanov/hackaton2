import React, { useEffect, useState } from "react"
import { getUserLocalStorage } from "../storageAPI/api"
import {Button, Card} from "antd"

const CardPerson = () => {
    const [user, setUser] = useState()

    useEffect(async function() {
        const userData = await getUserLocalStorage()
        if(userData) setUser(userData)
    }, [])
    
    if(!user) {
        return "loading"
    }
    
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={user.photo} />}
        >
            <h3>{user.name}</h3>
            <h4>{user.age} лет</h4>
            <p>{user.about}</p>
            <Button type="link" size="large" block>Открыть</Button>
            <Button type="primary" block>Добавить в избранное</Button>
        </Card>
    )
}

export default CardPerson