import { Avatar, Badge } from "antd"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserFavoriteLocalStorage } from "../../storageAPI/api"
import style from "./navBar.module.css"

const NavBar = () => {

    const users = getUserFavoriteLocalStorage()

    return (
        <div className={style.menu}>
            <div className={style.wrapper}>
                <li className={style.item}>
                    <Link to="/">
                        <button className={`${style.btn} btn`}>Главная</button>
                    </Link>
                </li>
                <li className={style.item}>
                    <Link to="/favorites" style={{position: "relative"}}>
                        <button className={`${style.btn} btn`}>
                            Избранное
                        </button>
                        <Badge count={users.length} offset={[-15, -40]} style={{position:"absolute", right: "-6px", top: 1}}/>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default NavBar
