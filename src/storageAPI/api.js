    
export const newUsers = [{
    id: 1,
    name: "Денис Бугреев",
    age: 28,
    about: "Teamlead",
    photo: "https://sun9-88.userapi.com/impf/ez9T7o5K2HteeSsuNbhxF0RUUURa8AQc7paXvg/5swS7OTw0ZQ.jpg?size=1440x1920&quality=96&sign=8a3f65ca8a7a9cf5a7feb6c7816b2507&type=album",
    social: ["https://github.com/Den9rcq", "https://t.me/Den9_rcq", "https://vk.com/den9_rcq"],
    whatDoing: ["smoking", "cleaning"],
    favorite: false,
    skills: [{title:"HTML", percent: 80}, {title:"CSS", percent: 80}, {title:"React", percent: 70}, {title: "TypeScript", percent: 60}]
}, {
    id: 2,
    name: "Алеся Мезина",
    age: 25,
    about: "Design",
    photo: "https://sun9-72.userapi.com/impg/pj40oJM5_ELN6oJgjMY2Oe4_OoJPdGEBJokFKA/rqhaZRsEkZg.jpg?size=550x680&quality=96&sign=6258684ff848711272c78c9c4b91f250&type=album",
    social: ["https://vk.com/vulpies", "https://github.com/vulpies"],
    whatDoing: ["drink of tea"],
    favorite: false,
    skills: [{title:"HTML", percent: 100}, {title:"CSS", percent: 100}, {title:"React", percent: 50}, {title: "Redux", percent: 20}]
}, {
    id: 3,
    name: "Евгений Шут",
    age: 27,
    about: "IT Programmer",
    photo: "https://lh3.googleusercontent.com/c0JjjUmZoxqxSIoRYQ2KtSg-Vzn0hu8JKeBO_fShfU-jaa2_rxDr1VFt0JSwAFgEt5tAXut69eznj90p43NJPNpIa0uDaGuEgTzoo9ruYuvpupHy3UWnIFF10UfpPP6NneRgkdw_3jBCzZ9Dvie63AsEXJeG7ZOesWfeJXv9MbFHY99VFwovxFkng-FiylYLp-CL-0l4aRYCBpsU9q6KOd0rylIMTv1c0EoJuwhgmq5PM5CQCjh8l1KqxWmsQQcz2W93m4gUBll7H39mkO8AZmvp2sYUeyfDkBLiT4Ixh44DOdQLUKvKYqtT_obweFB28kfIwxpSqcw066k9uYaFVAMGWOmLQqnl0lawV16ZpKxiBUtWb9RKXoJ__QlRATbwhHxkIBHB6aPi3VMKDT9bZfqf2SJCAAilI_LYeC4oQGZcNEyfaQfaXKaX42Nd-ARAfOoSSm5ZnZmNPAHbCgPL3VtmrPwz6KXd6kaZg2XY7tzR83HPbxTjYzS5xCICBphIiwK6U1nmR1cWKs_NrlOkRBNmJ3uVDoMcGU0nbZWFu9P8-b_MMkdfMXMTXmNq_gIbRkCQfX8bI4FfRTOpik5VpidojF4yWZMu6IGAPWkvyqTbr2716ddx1GFL4qpZZDgsoMm9ZAg2VtldkM3tSTbrrx8NIXfwgOmGDzB_eRuHGqXL_Ss1rfM49xL0ElVyaqv6eMf4F76yILZvVDJ2HPBZf5Aa=w727-h969-no?authuser=0",
    social: ["https://github.com/shutnikPk"],
    whatDoing: ["smoking", "cleaning"],
    favorite: false,
    skills: [{title:"HTML", percent: 75}, {title:"CSS", percent: 85}, {title:"React", percent: 60}, {title: "TypeScript", percent: 50}]
}, {
    id: 4,
    name: "Синавер Османов",
    age: 29,
    about: "Techlead",
    photo: "https://sun9-11.userapi.com/impf/0qObr6dXSQdOfTQuKik6LiClD4Yc6Y1ozTUO_w/rRASMIf0x-o.jpg?size=887x1183&quality=96&sign=51e43a01ffa32ef1a4dd9c7c3d16ff08&type=album",
    social: ["https://github.com/SinaverOsmanov", "https://vk.com/hosh_keldiniz", "https://www.instagram.com/sinaver92/"],
    whatDoing: ["cleaning"],
    favorite: false,
    skills: [{title:"HTML", percent: 90}, {title:"CSS", percent: 90}, {title:"React", percent: 80}, {title: "TypeScript", percent: 90}]
}
]

export function setUsersLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users))
}

export function getUsersLocalStorage() {
    const users = localStorage.getItem("users")
    if(!users) {
        setUsersLocalStorage(newUsers)
        return newUsers
    }
    return JSON.parse(users)
}

export function getUserByIdLocalStorage(userId) {
    let users = localStorage.getItem("users")
    users = JSON.parse(users)
    if(users) {
        return users.find(u=> u.id === Number(userId))
    }
}

export function getUserFavoriteLocalStorage() {
    let users = localStorage.getItem("users")
    users = JSON.parse(users)
    if(users) {
        return users.filter(u=> u.favorite === true)
    }
}
