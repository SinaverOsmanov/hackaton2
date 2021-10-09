import React, { useEffect } from "react"
import Header from "./header"
import Content from "./content"
import { setUsersLocalStorage } from "../storageAPI/api"
import ProgressBar from "./progress"
import { Layout } from "antd"
import BadgeComponent from "./badge"

function App() {
    useEffect(() => {
        setUsersLocalStorage()
    }, [])


    return (
        <Layout style={{ background: 'url("https://sun9-55.userapi.com/impg/c9IO4yz6AJ_Lftcu_P5mYM3zQZ54dzekkvYBWg/zFuhZCxJS0o.jpg?size=1884x2048&quality=96&sign=b3cb129fdaa7c0e7472e79a63dff87e9&type=album")' }}>
            <ProgressBar skillName={"ivan"} color={"blue"} type={"bar"} percents={75} />
            <Header />
            <Content />
            <BadgeComponent color={"blue"} title={"klhjhg"} />
            <BadgeComponent color={"red"} title={"PRIVET MIR"} />
        </Layout>
    )
}

export default App
