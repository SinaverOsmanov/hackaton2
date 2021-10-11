import { Col, Row } from "antd"
import React from "react"
import { useHistory } from "react-router"
import ButtonComponent from "./../components/button"

const ErrorPage = () => {
    const history = useHistory()
    return (
        <Col>
            <h3>
                <Row justify='center'>К сожалению такой страницы нет, вернитесь</Row>
                <Row justify='center' style={{margin: "20px 0 10px"}}><ButtonComponent type='primary' btnName='На главную' clickHandler={()=>history.push("/hackaton2/")}/></Row>
                <Row justify='center'> и попробуйте ещё раз</Row>
            </h3>
        </Col>
    )
}

export default ErrorPage