import React from "react"
import { Progress } from "antd"

const ProgressBar = ({ skillName, type, color, percents }) => {
    return (
        <>
            <p className="text-start">{skillName}</p>
            <div style={{ maxWidth: 20 + "%", maxHeight: 20 + "%", }}>
                {type === "cicrle" ? <Progress type={type} percent={percents} strokeColor={color} /> : <Progress percent={percents} strokeColor={color} />}
            </div>
        </>)
}

export default ProgressBar