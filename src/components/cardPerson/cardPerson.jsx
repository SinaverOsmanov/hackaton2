import React from "react"
import { Link } from "react-router-dom"
import style from "./cardPerson.module.css"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import ModalComponent from "../modalComponent"
import { Col } from "antd"
import ProgressBar from "../progress"

const CardPerson = ({ user, onClickFavorite }) => {
    const favorite = user.favorite ? <HeartFilled /> : <HeartOutlined />

    return (
        <div className={style.cards}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h3 className={style.h3}>{user.name}</h3>
                    <div style={{
                        background: `url(${user.photo}) center center`,
                        backgroundSize: "cover",
                    }}
                    lassName={style.image} />
                    <h4 className={style.h4}>{user.age} лет</h4>
                    <p className={style.p}>{user.about}</p>
                    {user.skills.map((s, i) => <Col key={i}><ProgressBar percents={s.percent} skillName={s.title} color={s.color} /></Col>)}
                </div>
                <div className={style.links}>
                    {/* <Link to={`users/${user.id}`}> */}
                    <ModalComponent user={user}>
                        <button style={{
                            border: "0", background: "none",
                            fontSize: "20px"
                        }} onClick={() => onClickFavorite(user.id)}>{favorite}</button>
                    </ModalComponent>
                    {/* </Link> */}
                    <button className={style.btn} onClick={() => onClickFavorite(user.id)}>{favorite}</button>
                </div>

            </div>
        </div>
    )
}
export default CardPerson
