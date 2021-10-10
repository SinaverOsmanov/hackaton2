import React from "react"
import { Button } from "antd"
import { ButtonPropsType } from "./utils/types"

const ButtonComponent = ({ color, clickHandler, btnName, shape, size, type }) => {
    return (
        <Button type={type} shape={shape} style={{ background: color }} size={size} onClick={clickHandler}>
            {btnName}
        </Button>
    )
}
ButtonComponent.propTypes = ButtonPropsType
export default ButtonComponent