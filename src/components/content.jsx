import React from "react"
import Routers from "./routers"
// import Content  from "antd"

const Content = ({ callback }) => {
    return (
        // <ContentContainer style={{ padding: "0 50px" }}>
        <>
            <Routers callback={callback} />
            
        </>
        // </ContentContainer>
    )
}

export default Content