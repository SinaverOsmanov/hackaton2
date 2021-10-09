import { Row } from "antd"
import React from "react"
import { useParams } from "react-router"

const UserPage = () => {
    const {userId} = useParams()

    
    return (
        <Row>
            User Page
        </Row>
    )
}

export default UserPage