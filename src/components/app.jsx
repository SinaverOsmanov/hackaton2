import React from "react"
import Routers from "./routers"
import Header from "./header"
import Content from "./content"
import Progress from "./progress"

function App() {
    return (
        <div className="container">
            <Progress type={"bar"} color={"red"} percents={100} />
            <Header />
            <Content />
        </div>
    )
}

export default App
