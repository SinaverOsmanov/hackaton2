import React from "react"
import { useLocation, Link } from "react-router-dom"
import { Breadcrumb } from "antd"

const BreadcrumbsComponent = () => {
    const { pathname } = useLocation()
    if (pathname === "/") return null
    let title2 = pathname.split("/").filter(e => e !== "")
    title2 = title2.filter(e => e !== "users")
    return (
        <Breadcrumb>
            <Breadcrumb.Item ><Link to="/">Main</Link></Breadcrumb.Item>
            {title2.map(t => (<Breadcrumb.Item key={t}><Link to={t}>{t = t[0].toUpperCase() + t.slice(1)}</Link></Breadcrumb.Item>))}
        </Breadcrumb>
    )
}

export default BreadcrumbsComponent
