import React from "react"

const Progress = ({ skillName, type, color, percents }) => {
    const bgColor = {
        blue: "",
        green: "bg-success",
        azure: "bg-info",
        yellow: "bg-warning",
        red: "bg-danger"
    }
    
    if (type === "bar") {
        return (
            <>
                <p className="text-start">{skillName}</p>
                <div className={"progress"} style={{ maxWidth: 25 + "%" }}>
                    <div className={"progress-bar " + bgColor[color]} role="progressbar" style={{ width: percents + "%" }} aria-valuenow={percents} aria-valuemin="0" aria-valuemax="100">{percents}%</div>
                </div>
            </>
        )
    }
    if (type === "circle") {
        return (
            <div className="progress yellow"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                <div className="progress-value">{percents}%</div>
            </div>
        )
    }
}

export default Progress