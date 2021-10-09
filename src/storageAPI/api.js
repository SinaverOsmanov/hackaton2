export function setUserLocalStorage() {
    const user = {
        id: 1,
        name: "Denis Random",
        age: 30,
        about: "teamlead",
        photo: "no photo",
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