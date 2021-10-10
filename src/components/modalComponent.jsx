import { Carousel, Modal, Row, Col } from "antd"
import React, { useState } from "react"
import { User } from "../pages/favoritesPage"
import style from "./cardPerson/cardPerson.module.css"

export default function ModalComponent({ user, children }) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }
    function onChange(a, b, c) {
        console.log(a, b, c)
    }
    const contentStyle = {
        height: "auto",
        color: "#000",
        textAlign: "center",
        background: "none",
    }
    return (
        <>
            <button className={style.btn} onClick={showModal}>
                {isModalVisible ? "Close" : "Open"}
            </button>
            <Modal
                title="User"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={870}
                bodyStyle={{ background: "#fc0" }}
            >
                <Row>
                    <Col span={8}>
                        <Row>
                            <img src={user.photo} />
                        </Row>
                        {children}
                    </Col>
                    <Col span={15} offset={1}>
                        <Carousel afterChange={onChange}>
                            <div>
                                <div style={contentStyle}>
                                    <Col>
                                        <Row>Имя Фамилия: {user.name}</Row>
                                        <Row>Возраст: {user.age}</Row>
                                        <Row>О себе: {user.about}</Row>
                                        <Row>
                                            <Col span={4}>Hard skills: </Col>
                                            <Col span={20}>
                                                <Row justify="start">
                                                    {user.skills.map((s, i) => (
                                                        <Col key={i}>
                                                            <span
                                                                style={{
                                                                    marginRight:
                                                                        "5px",
                                                                }}
                                                            >
                                                                {s.title}
                                                            </span>
                                                            <span>
                                                                {s.percent}
                                                            </span>
                                                            ,
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </div>
                            </div>
                            <div>
                                <div style={contentStyle}>
                                    <Col span={3}>Социальные ссылки: </Col>
                                    <Col span={20}>
                                        {user.social.map((s, i) => (
                                            <span
                                                key={i}
                                                style={{ marginRight: "5px" }}
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </Col>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}
