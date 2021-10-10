import React from "react"
import { Progress } from "antd"
import { changeColor } from "./utils/changeColor"
import { ProgressBarPropsType } from "./utils/types"

const ProgressBar = ({ skillName, type, color, percents }) => {
    return (
        <>
            <div style={{ textAlign: "left" }}>
                <p style={{ margin: "5px 0 0" }}>{skillName}</p>
                {type === "circle" ? (
                    <Progress
                        type={type}
                        percent={percents}
                        strokeColor={color || changeColor(skillName)}
                    />
                ) : (
                    <Progress
                        percent={percents}
                        strokeColor={color || changeColor(skillName)}
                    />
                )}
            </div>
        </>
    )
}

ProgressBar.propTypes = ProgressBarPropsType

export default ProgressBar
