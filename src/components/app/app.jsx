import React, { useState } from "react"
import Header from "../header"
import Content from "../content"
import ProgressBar from "../progress"
import { Layout } from "antd"
import style from "./app.module.css"

function App() {
    const [state, setState] = useState(0)
    function callback(){
        setState(state+1)
    }
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
                <Content callback={callback}/>
            </div>
        </Layout>
    )
}

export default App
