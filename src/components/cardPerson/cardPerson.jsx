import React from "react"
import { Link } from "react-router-dom"
import style from "./cardPerson.module.css"

const CardPerson = ({ user, onClickFavorite }) => {
    const favorite = user.favorite ? "Из избранного" : "В избранное"
    
    return (
        <div className={style.cards}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h3 className={style.h3}>{user.name}</h3>
                    <div style={{
                        background: `url(${user.photo}) center center`,
                        backgroundSize: "cover",
                    }}
                    className={style.image}/>
                    <h4 className={style.h4}>{user.age} лет</h4>
                    <p className={style.p}>{user.about}</p>
                </div>
                <div className={style.links}>
                    <Link to={`users/${user.id}`}>
                        <button className={style.btn}>Открыть</button>
                    </Link>
                    <button className={style.btn} onClick={()=>onClickFavorite(user.id)}>{favorite}</button>
                </div>
            </div>
        </div>
    )
}
export default CardPerson
