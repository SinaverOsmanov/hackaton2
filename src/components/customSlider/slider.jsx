import React from "react"
import { SliderPropsType } from "../utils/types"
import { Carousel } from "antd"

function SliderComponent({ children = [1, 2, 3, 4, 5] }) {
    const contentStyle = {
        height: "160px",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
    }

    return (
        <>
            <Carousel autoplay>
                {children.map(component => (<div style={contentStyle} key={component}>{component}</div>))}
            </Carousel>
        </>
    )
}
SliderComponent.propTypes = SliderPropsType
export default SliderComponent