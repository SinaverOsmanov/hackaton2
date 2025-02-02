import React, { useReducer } from "react"
import Header from "../header"
import Content from "../content"
import { Layout } from "antd"
import style from "./app.module.css"
import BreadcrumbsComponent from "../breadcrumbs"
import { Context } from "./../../storageAPI/favoriteContext"
import { favoriteReducer } from "../../reducers/favoriteReducer"

function App() {
    const [state, dispatch] = useReducer(favoriteReducer)

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Layout style={{ background: "transparent" }}>
                <Header />
                <div className={style.comwrap}>
                    <BreadcrumbsComponent />
                    <Content />
                </div>
            </Layout>
        </Context.Provider>
    )
}

export default App
