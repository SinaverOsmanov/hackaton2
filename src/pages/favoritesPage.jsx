import React, { useEffect, useState } from "react"
import { getUserFavoriteLocalStorage } from "../storageAPI/api"
// import { getUserLocalStorage } from "../storageAPI/api"
import { Row, Col } from "antd"
import Breadcrumbs from "../components/breadcrumbs"

export default function FavoritesPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const userData = getUserFavoriteLocalStorage()
        if (userData) setUsers(userData)
    }, [])

    if (users.length === 0) {
        return "loading"
    }

    return (
        <>
            {users.map(u => <User key={u.id} user={u} />)}
        </>
    )
}


export function User({ user }) {
    return (
        <Row>
            <Col offset={1} span={6}>
                <Row><img src={user.photo} /></Row>
            </Col>
            <Col offset={3} span={14}>
                <Row>Имя Фамилия: {user.name}</Row>
                <Row>Возраст: {user.age}</Row>
                <Row>О себе: {user.about}</Row>
                <Row gutter={5}>
                    <Col span={2}>Hard skills: </Col>
                    <Col span={19}>
                        <Row justify="start">{user.skills.map((s, i) => <Col key={i}><span style={{ marginRight: "5px" }}>{s.title}</span><span>{s.percent}</span>, </Col>)}</Row>
                    </Col>
                </Row>
                <Row>
                    <Col span={3}>Социальные ссылки: </Col>
                    <Col span={20}>{user.social.map((s, i) => <span key={i} style={{ marginRight: "5px" }}>{s}</span>)}</Col>
                </Row>
            </Col>
        </Row>
    )
}