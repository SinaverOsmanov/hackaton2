import React from "react"
import { Button } from "antd"

const ButtonComponent = ({ color, clickHandler, btnName, shape, size, type }) => {
    return (
        // <span><button style={{ background: color }} onClick={(event) => clickHandler()} type={type}>{btnName}</button> </span>
        <span> <Button type={type} shape={shape} style={{ background: color }} size={size} onClick={(event) => clickHandler()}>
            {btnName}
        </Button></span>
    )
}

export default ButtonComponent