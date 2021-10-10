import React, {useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import { Context } from "./../../storageAPI/favoriteContext"
import { Badge } from "antd"
import ButtonComponent from "../button"
import { getUserFavoriteLocalStorage } from "../../storageAPI/api"

const NavBar = () => {
    const { state } = useContext(Context)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const favoriteUsers = getUserFavoriteLocalStorage()
        setCount(favoriteUsers.length)
    }, [])
    
    return (
        <div className={style.menu}>
            <div className={style.wrapper}>
                <li className={style.item}>
                    <Link to="/hackaton2/">
                        {
                            <ButtonComponent
                                setting={style.btn}
                                btnName="Главная"
                            />
                        }
                    </Link>
                </li>
                <li className={style.item}>
                    <Link
                        to="/hackaton2/favorites"
                        style={{ position: "relative" }}
                        className={`${style.btn} btn`}
                    >
                        Избранное
                        <Badge
                            count={state ? state.favoriteCount : count }
                            offset={[-15, -40]}
                            style={{
                                position: "absolute",
                                right: "-22px",
                                top: 8,
                            }}
                        />
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default NavBar
