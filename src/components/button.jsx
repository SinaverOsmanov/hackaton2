import React from "react"
import { Button } from "antd"

const ButtonComponent = ({ color, clickHandler, btnName, shape, size, type }) => {
    return (
        <Button type={type} shape={shape} style={{ background: color }} size={size} onClick={clickHandler}>
            {btnName}
        </Button>
    )
}

export default ButtonComponent