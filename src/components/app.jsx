<<<<<<< HEAD
import React from "react"
=======
import React, { useEffect } from "react"
>>>>>>> 9a5fcb366542d354b753d5e262251fd8bde9acfc
import Header from "./header"
import Content from "./content"
import { setUserLocalStorage } from "../storageAPI/api"

function App() {
    useEffect(() => {
        setUserLocalStorage()
    }, [])
    return (
        <div className="container">
            <Header />
            <Content />
        </div>
    )
}

export default App
