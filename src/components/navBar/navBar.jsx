import React from "react"
import { Link } from "react-router-dom"
import style from "./navBar.module.css"

const NavBar = () => {
    return (
        <div className={style.menu}>
            <div className={style.wrapper}>
                <li className={style.item}>
                    <Link to="/">
                        <button className={`${style.btn} btn`}>Главная</button>
                    </Link>
                </li>

                <li className={style.item}>
                    <Link to="/favorites">
                        <button className={`${style.btn} btn`}>
                            Избранное
                        </button>
                    </Link>
                </li>
            </div>
        </div>
    )
}

export default NavBar
