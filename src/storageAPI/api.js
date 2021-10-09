export function setUserLocalStorage() {
    const user = {
        id: 1,
        name: "Denis Random",
        age: 30,
        about: "teamlead",
        photo: "https://sun9-88.userapi.com/impf/ez9T7o5K2HteeSsuNbhxF0RUUURa8AQc7paXvg/5swS7OTw0ZQ.jpg?size=1440x1920&quality=96&sign=8a3f65ca8a7a9cf5a7feb6c7816b2507&type=album",
        social: "www.vk.com",
        whatDoing: ["smoking", "cleaning"],
        favorite: false,
        skills: ["HTML", "CSS", "React"]
    }

    localStorage.setItem("user", JSON.stringify(user))
}

export function getUserLocalStorage() {
    const user = localStorage.getItem("user")
    return JSON.parse(user)
}