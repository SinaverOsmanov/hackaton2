import React, { useState } from "react"
import Header from "../header"
import Content from "../content"
import { Layout } from "antd"
import style from "./app.module.css"
import BreadcrumbsComponent from "../breadcrumbs"

function App() {
    const [state, setState] = useState(0)
    function callback() {
        setState(state + 1)
    }
    return (
        <Layout style={{ background: "transparent" }}>
            <div className={style.container}>
                <BreadcrumbsComponent />
                <Header />
                <div className={style.comwrap}>
                    <Content callback={callback} />
                </div>
            </div>
        </Layout>
    )
}

export default App
