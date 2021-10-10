import { Col, Row } from "antd"
import React from "react"
import style from "../pages/favoritesPage.module.css"
import ProgressBar from "./progress"

export function User({ user }) {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <div
                    style={{
                        background: `url(${user.photo}) center center`,
                        backgroundSize: "cover",
                    }}
                    className={style.image}
                />
                <div className={style.text}>
                    <h3>{user.name}</h3>
                    <p>
                        <b>Возраст:</b> {user.age}
                    </p>
                    <p>
                        <b>О себе:</b> {user.about}
                    </p>
                    <p>
                        <b>Соц.сети:</b>
                    </p>
                    {user.social.map((s, i) => (
                        <span key={i} style={{ marginRight: "5px" }}>
                            {s}
                        </span>
                    ))}
                    <p>
                        <b>Хард скилы:</b>
                    </p>
                    <Row>
                        {user.skills.map((s, i)=> <Col key={i} span={6}><ProgressBar percents={s.percent} skillName={s.title} type='circle'/></Col>)}
                    </Row>
                </div>
            </div>
        </div>
    )
}
