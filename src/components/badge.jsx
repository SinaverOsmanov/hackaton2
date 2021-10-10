import React from "react"
import { Tag } from "antd"
import { BadgePropsType } from "./utils/types"

const BadgeComponent = ({ title, color, id }) => {
    return (
        <span>
            <Tag color={color} key={id} >
                {title.toUpperCase()}
            </Tag>
        </span>
    )
}

BadgeComponent.propTypes = BadgePropsType

export default BadgeComponent