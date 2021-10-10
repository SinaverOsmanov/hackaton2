import React from "react"
import { Link } from "react-router-dom"
import style from "./cardPerson.module.css"
import { HeartOutlined, HeartFilled } from "@ant-design/icons"
import { Col } from "antd"
import ProgressBar from "../progress"
import ButtonComponent from "../button"
import {CardPersonType} from "../utils/types"

const CardPerson = ({ user, onClickFavorite }) => {
    const favorite = user.favorite ? <HeartFilled /> : <HeartOutlined />

    return (
        <div className={style.cards}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h3 className={style.h3}>{user.name}</h3>
                    <div
                        style={{
                            background: `url(${user.photo}) center center`,
                            backgroundSize: "cover",
                        }}
                        className={style.image}
                    />
                    <h4 className={style.h4}>{user.age} лет</h4>
                    <p className={style.p}>{user.about}</p>
                    {user.skills.map((s, i) => (
                        <Col key={i}>
                            <ProgressBar
                                percents={s.percent}
                                skillName={s.title}
                            />
                        </Col>
                    ))}
                </div>
                <div className={style.links}>
                    <Link to={`/hackaton2/users/${user.id}`} className={style.btn}>
                        Открыть
                    </Link>
                    <ButtonComponent
                        setting={style.btn}
                        btnName={favorite}
                        clickHandler={() => onClickFavorite(user.id)}
                    />
                </div>
            </div>
        </div>
    )
}
CardPerson.propTypes = CardPersonType
export default CardPerson
