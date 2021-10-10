import React, { useContext } from "react"
import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import { Context } from "./../../storageAPI/favoriteContext"
import { Badge } from "antd"
import { getUserFavoriteLocalStorage } from "../../storageAPI/api"

const NavBar = () => {
    const {state} = useContext(Context)
    const favoriteUsers = getUserFavoriteLocalStorage().length
    return (
        <div className={style.menu}>
            <div className={style.wrapper}>
                <li className={style.item}>
                    <Link to="/">
                        <button className={`${style.btn} btn`}>Главная</button>
                    </Link>
                </li>
                <li className={style.item}>
                    <Link to="/favorites" style={{position: "relative"}} className={`${style.btn} btn`} >
                            Избранное
                        <Badge count={favoriteUsers || state && state.favoriteCount} offset={[-15, -40]} style={{position:"absolute", right: "-22px", top: 8}}/>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default NavBar
