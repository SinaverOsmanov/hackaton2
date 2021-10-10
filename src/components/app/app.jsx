import React, { useContext, useReducer, useState } from "react"
import Header from "../header"
import Content from "../content"
import ProgressBar from "../progress"
import { Layout } from "antd"
import style from "./app.module.css"
import BreadcrumbsComponent from "../breadcrumbs"
import { Context } from "./../../storageAPI/favoriteContext"
import { favoriteReducer } from "../../reducers/favoriteReducer"

function App() {

    const [state, dispatch] = useReducer(favoriteReducer)

    return (
        <Context.Provider value={{state, dispatch}}>

            <Layout className={style.bckg} style={{ backgroundSize: "cover" }}>
                <div className={style.container}>
                    <BreadcrumbsComponent />
                    <Header />
                    <div className={style.comwrap}>
                        <ProgressBar
                            skillName={"ivan"}
                            color={"blue"}
                            type={"bar"}
                            percents={75}
                        />
                        <Content/>
                    </div>
                </div>
            </Layout>
        </Context.Provider>
    )
}

export default App
