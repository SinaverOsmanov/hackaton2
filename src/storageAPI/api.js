export function setUsersLocalStorage() {
    const users = [
        {
            id: 1,
            name: "Denis Random",
            age: 30,
            about: "teamlead",
            photo: "https://sun9-88.userapi.com/impf/ez9T7o5K2HteeSsuNbhxF0RUUURa8AQc7paXvg/5swS7OTw0ZQ.jpg?size=1440x1920&quality=96&sign=8a3f65ca8a7a9cf5a7feb6c7816b2507&type=album",
            social: ["www.webcam.com", "www.badoo.com", "www.instagram.com"],
            whatDoing: ["smoking", "cleaning"],
            favorite: false,
            skills: ["HTML", "CSS", "React"],
        },
        {
            id: 2,
            name: "Alesya Random",
            age: 25,
            about: "play LOL",
            photo: "https://sun9-72.userapi.com/impg/pj40oJM5_ELN6oJgjMY2Oe4_OoJPdGEBJokFKA/rqhaZRsEkZg.jpg?size=550x680&quality=96&sign=6258684ff848711272c78c9c4b91f250&type=album",
            social: ["www.vk.com"],
            whatDoing: ["drink of tea"],
            favorite: false,
            skills: ["HTML", "CSS", "React"],
        },
        {
            id: 3,
            name: "Evgeniy Random",
            age: 40,
            about: "Father",
            photo: "https://scontent.fmsq3-1.fna.fbcdn.net/v/t1.6435-9/87018358_107052504221925_2371647066444136448_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGzWpWOlZd7f0s3N3dJthtfJURHAJQnmMglREcAlCeYyPt_qLn0xxs7gH1FATayt1esxsM5mc5w99CLnaDbLBY_&_nc_ohc=icS2v4dD8bwAX8oYS2v&tn=M9By-q9mRe_Mck41&_nc_ht=scontent.fmsq3-1.fna&oh=2922be933472a67f65c750b940826395&oe=6185F5C8",
            social: ["www.vk.com"],
            whatDoing: ["smoking", "cleaning"],
            favorite: false,
            skills: ["HTML", "CSS", "React"],
        },
        {
            id: 29,
            name: "Sinaver Random",
            age: 25,
            about: "tech lead",
            photo: "https://sun9-88.userapi.com/impf/ez9T7o5K2HteeSsuNbhxF0RUUURa8AQc7paXvg/5swS7OTw0ZQ.jpg?size=1440x1920&quality=96&sign=8a3f65ca8a7a9cf5a7feb6c7816b2507&type=album",
            social: ["www.vk.com"],
            whatDoing: ["cleaning"],
            favorite: false,
            skills: ["HTML", "CSS", "React"],
        },
    ]

    localStorage.setItem("users", JSON.stringify(users))
}

export function getUsersLocalStorage() {
    const users = localStorage.getItem("users")
    return JSON.parse(users)
}
