import React from "react"

const Progress = ({ skillName, type, color, percents }) => {
    if (type === "bar") {
        return (
            <div classNameName={"progress " + color} style={{ maxWidth: 25 + "%" }}>
                <div classNameName="progress-bar" role="progressbar" style={{ width: percents + "%" }} aria-valuenow={percents} aria-valuemin="0" aria-valuemax="100">{percents}%</div>
            </div >
        )
    }
    if (type === "circle") {
        <div className="progress yellow"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
            <div className="progress-value">{percents}%</div>
        </div>
    }
}

export default Progress