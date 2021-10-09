import React, { useEffect } from "react"
import Header from "./header"
import Content from "./content"
import { setUserLocalStorage } from "../storageAPI/api"
import BadgeComponent from "./badge"

function App() {
    useEffect(() => {
        setUserLocalStorage()
    }, [])


    return (
        <div className="container">
            <BadgeComponent />
            <Header />
            <Content />
        </div>
    )
}

export default App
