import React from "react"
import { Tag } from "antd"
import { BadgePropsType } from "./utils/types"

const BadgeComponent = ({ title, color}) => {
    return (
        <span>
            <Tag color={color} >
                {title.toUpperCase()}
            </Tag>
        </span>
    )
}

BadgeComponent.propTypes = BadgePropsType

export default BadgeComponent