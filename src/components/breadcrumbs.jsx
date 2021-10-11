import React from "react"
import { useLocation, Link } from "react-router-dom"
import { Breadcrumb } from "antd"

const BreadcrumbsComponent = () => {
    const { pathname } = useLocation()
    if (pathname === "/") return null
    let title = pathname.split("/").filter((e) => e !== "")
    title = title.filter((e) => e !== "users")
    return (
        <Breadcrumb>
            {title.map((t, i, arr) => {
                return (
                    <Breadcrumb.Item  key={i}>
                        {arr.length - 1 === i ?
                            <span>{(t = t[0].toUpperCase() + t.slice(1))}</span>
                            :
                            <Link to={`/${t}`}>{(t = t[0].toUpperCase() + t.slice(1))}</Link>
                        }
                    </Breadcrumb.Item>)
            })}
        </Breadcrumb>
    )
}

export default BreadcrumbsComponent
