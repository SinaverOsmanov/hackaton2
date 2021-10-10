import React from "react"
import { Progress } from "antd"
import {logDOM} from "@testing-library/react"

const ProgressBar = ({ skillName, type, color, percents }) => {
    const changeColor = (name) => {
        let colorBar
        switch (name) {
        case "HTML":
            colorBar = "#fa541c"
            break
        case "CSS":
            colorBar = "#531dab"
            break
        case "React":
            colorBar = "#1890ff"
            break
        default:
            break
        }
        return colorBar
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <p>{skillName}</p>
                {type === "circle"
                    ? <Progress type={type} percent={percents} strokeColor={color || changeColor(skillName)} />
                    : <Progress percent={percents} strokeColor={color || changeColor(skillName)} />}
            </div>
        </>
    )
}

export default ProgressBar