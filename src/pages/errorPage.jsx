import { Col, Row } from "antd"
import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => {

    return (
        <Col>
            <Row justify='center'>К сожалению такой страницы нет, вернитесь на главную и попробуйте ещё раз</Row>
            <Row>
                <Link to='/hackaton2/'>на главную</Link>
            </Row>
        </Col>
    )
}

export default ErrorPage