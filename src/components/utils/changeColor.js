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
        colorBar = "#0da211"
        break
    case "Redux":
        colorBar = "#0da211"
        break
    default:
        break
    }
    return colorBar
}