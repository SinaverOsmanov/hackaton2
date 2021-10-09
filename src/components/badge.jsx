import React from "react"
import { Tag } from "antd"

const BadgeComponent = ({ title, color, id }) => {
    return (
        <span>
            <Tag color={color} key={id} >
                {title.toUpperCase()}
            </Tag>
        </span>
    )
}

export default BadgeComponent