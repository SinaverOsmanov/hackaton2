import React from "react"
import { Button } from "antd"
import { ButtonPropsType } from "./utils/types"

const ButtonComponent = ({
    style,
    clickHandler,
    btnName,
    shape,
    size,
    type,
    setting,
}) => {
    return (
        <Button
            type={type}
            shape={shape}
            style={style}
            size={size}
            onClick={clickHandler}
            className={setting}
        >
            {btnName}
        </Button>
    )
}
ButtonComponent.propTypes = ButtonPropsType
export default ButtonComponent
