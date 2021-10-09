import React from "react"
import { Progress } from "antd"

const ProgressBar = ({ skillName, type, color, percents }) => {
    return (
        <>
            <div style={{ maxWidth: 20 + "%", maxHeight: 20 + "%", }}>
                <p className="text-center">{skillName}</p>
                {type === "circle"
                    ? <Progress type={type} percent={percents} strokeColor={color} />
                    : <Progress percent={percents} strokeColor={color} />}
            </div>
        </>
    )
}

export default ProgressBar