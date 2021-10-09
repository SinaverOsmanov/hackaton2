import React, { useEffect } from "react"
import Header from "./header"
import Content from "./content"
import { setUserLocalStorage } from "../storageAPI/api"
import CardPerson from "./cardPerson"

function App() {
    useEffect(() => {
        setUserLocalStorage()
    }, [])
    return (
        <div className="container">
            <Header />
            <Content />
            <CardPerson />
        </div>
    )
}

export default App
