import React from "react"
import { useLocation, Link } from "react-router-dom"
import { Breadcrumb } from "antd"

const BreadcrumbsComponent = () => {
    const { pathname } = useLocation()
    if (pathname === "/") return null
    let title = pathname.split("/").filter((e) => e !== "")
    title = title.filter((e) => e !== "users" || e !== "error" || e !== "hackaton2")
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link style={{ color: "white" }} to={"/hackaton2/"}>
                    Main
                </Link>
            </Breadcrumb.Item>
            {title.map((t) => (
                <Breadcrumb.Item key={t}>
                    <Link to={`/hackaton2/${t}`}>{(t = t[0].toUpperCase() + t.slice(1))}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    )
}

export default BreadcrumbsComponent
