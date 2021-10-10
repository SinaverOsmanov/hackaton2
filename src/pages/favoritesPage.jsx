import React, { useEffect, useState } from "react"
import { getUserFavoriteLocalStorage } from "../storageAPI/api"
// import { getUserLocalStorage } from "../storageAPI/api"
import { Row, Col } from "antd"
import style from "./favoritesPage.module.css"
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
            {users.map((u) => (
                <User key={u.id} user={u} />
            ))}
        </>
    )
}

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
                ></div>

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
                    </p>{" "}
                    {user.skills.map((s) => (
                        <>
                            <span style={{ marginRight: "5px" }}>
                                {s.title}
                            </span>
                            <span>{s.percent}</span>{" "}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
