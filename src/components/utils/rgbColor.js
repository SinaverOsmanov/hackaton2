export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const randomColorRGB = () => {
    return `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`
} 