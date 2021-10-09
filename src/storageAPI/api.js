export async function setUserLocalStorage() {
    const user = {
        id: 1,
        name: "Denis Random",
        age: 30,
        about: "teamlead",
        photo: "no photo",
        social: "www.vk.com",
        whatDoing: ["smoking", "cleaning"]
    }

    await localStorage.setItem("user", JSON.stringify(user))
}

export async function getUserLocalStorage() {
    const user = localStorage.getItem("user")
    return user
}