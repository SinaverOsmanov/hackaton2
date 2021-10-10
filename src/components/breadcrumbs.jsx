import React from "react"
import { useLocation, Link } from "react-router-dom"
import { Breadcrumb } from "antd"

const BreadcrumbsComponent = () => {
    const { pathname } = useLocation()
    if (pathname === "/") return null
    let title = pathname.split("/").filter((e) => e !== "")
    title = title.filter((e) => e !== "users")
    title = title.filter((e) => e !== "error")
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link style={{ color: "white" }} to="/">
                    Main
                </Link>
            </Breadcrumb.Item>
            {title.map((t) => (
                <Breadcrumb.Item key={t}>
                    <Link to={t}>{(t = t[0].toUpperCase() + t.slice(1))}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default BreadcrumbsComponent
