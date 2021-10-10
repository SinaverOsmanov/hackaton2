import { Button } from "antd"
import React from "react"
import ButtonComponent from "../button"
import { SliderPropsType } from "../utils/types"
import { Carousel } from "antd"

function SliderComponet({ arrayComponents = [1, 2, 3, 4, 5] }) {
    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    }

    return (
        <>
            <Carousel >
                {arrayComponents.map(component => (<div style={contentStyle} key={component}>{component}</div>))}
            </Carousel>,
        </>
    )
}
SliderComponet.propTypes = SliderPropsType
export default SliderComponet