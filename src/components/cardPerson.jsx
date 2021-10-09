import React from "react"
import { Button, Card, Col } from "antd"
import { Link } from "react-router-dom"

const CardPerson = ({user}) => {

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={ <Col style={{backgroundSize: "cover", minHeight: "320px"}}>
                <img alt="example" src={user.photo} />
            </Col>}
        >
            <h3>{user.name}</h3>
            <h4>{user.age} лет</h4>
            <p>{user.about}</p>
            <Link to={`users/${user.id}`}>Открыть</Link>
            <Button type="primary" block>Добавить в избранное</Button>
        </Card>
    )
}

export default CardPerson