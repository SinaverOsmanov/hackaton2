import { Col, Row } from "antd"
import React from "react"
import ProgressBar from "./progress"
import favStyle from "../pages/favoritesPage.module.css"
import userStyle from "../pages/user.module.css"

export function User({ user, text }) {
    let style = text === "favStyle" ? favStyle : userStyle
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
                    <p className={style.p}>
                        <b className={style.b}>Возраст:</b> {user.age} лет
                    </p>
                    <p className={style.p}>
                        <b className={style.b}>О себе:</b> {user.about}
                    </p>
                    <p className={style.p}>
                        <b className={style.b}>Соц.сети:</b>
                    </p>
                    {user.social.map((s, i) => (
                        <span
                            className={style.span}
                            key={i}
                            style={{ marginRight: "5px" }}
                        >
                            {s}
                        </span>
                    ))}
                    <p className={style.skills}>
                        <b className={style.b}>Хард скилы:</b>
                    </p>
                    <Row>
                        {user.skills.map((s, i) => (
                            <Col key={i} span={8}>
                                <ProgressBar
                                    percents={s.percent}
                                    skillName={s.title}
                                    type="circle"
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    )
}
