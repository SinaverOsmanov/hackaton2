import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { User } from "../components/user"
import { getUserByIdLocalStorage } from "../storageAPI/api"

const UserPage = () => {
    const { userId } = useParams()

    const [user, setUser] = useState()
    useEffect(() => {
        const userData = getUserByIdLocalStorage(userId)
        if (userData) setUser(userData)
    }, [userId])

    if (!user) return "loading"

    return (
        <User user={user} />
        // <Row>
        //     <Col offset={1} span={6}>
        //         <Row><img src={user.photo}/></Row>
        //     </Col>
        //     <Col offset={3} span={14}>
        //         <Row>Имя Фамилия: {user.name}</Row>
        //         <Row>Возраст: {user.age}</Row>
        //         <Row>О себе: {user.about}</Row>
        //         <Row>
        //             <Col span={3}>Социальные ссылки: </Col>
        //             <Col span={20}>{user.social.map((s, i)=> <span key={i} style={{marginRight: "5px"}}>{s}</span>)}</Col>
        //         </Row>
        //         <Row>Hard skills:</Row>
        //         <Row gutter={5}>
        //             {user.skills.map((s, i)=> <Col key={i} span={6}><ProgressBar percents={s.percent} skillName={s.title} type='circle'/></Col>)}
        //         </Row>
        //     </Col>
        // </Row>
    )
}

export default UserPage
