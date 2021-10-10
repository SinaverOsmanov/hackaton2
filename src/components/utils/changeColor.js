export const changeColor = (name) => {
    let colorBar= ""
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
    case "TypeScript":
        colorBar = "#b1ea6f"
        break
    case "Redux":
        colorBar = "#b1ea6f"
        break
    default:
        break
    }
    return colorBar
}