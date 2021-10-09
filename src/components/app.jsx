import React, { useEffect } from "react"
import Header from "./header"
import Content from "./content"
import { setUsersLocalStorage } from "../storageAPI/api"
import ProgressBar from "./progress"
import { Layout } from "antd"
import style from "./app.module.css"

function App() {
    useEffect(() => {
        setUsersLocalStorage()
    }, [])

    return (
        <Layout className={style.bckg}>
            <div className={style.container}>
                <Header />
                <ProgressBar
                    skillName={"ivan"}
                    color={"blue"}
                    type={"bar"}
                    percents={75}
                />
                <Content />
            </div>
        </Layout>
    )
}

export default App
