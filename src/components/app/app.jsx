import React, { useState } from "react"
import Header from "../header"
import Content from "../content"
import ProgressBar from "../progress"
import {Badge, Layout, Progress} from "antd"
import style from "./app.module.css"
import BreadcrumbsComponent from "../breadcrumbs"

function App() {
    const [state, setState] = useState(0)
    function callback() {
        setState(state + 1)
    }
    return (
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
                    <Content callback={callback} />
                </div>
                <ProgressBar
                    skillName={"ivan"}
                    color={"blue"}
                    type={"bar"}
                    percents={75}
                />
                <Content callback={callback} />
            </div>
        </Layout>
    )
}

export default App
