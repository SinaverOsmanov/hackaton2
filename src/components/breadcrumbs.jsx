import React from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"
import HomePage from "../pages/homePage"
import UserPage from "../pages/userPage"
import FavoritesPage from "../pages/favoritesPage"
import ErrorPage from "../pages/errorPage"
import { Breadcrumb } from "antd"

const BreadcrumbsComponent = () => {
    const { pathname } = useLocation()
    if (pathname === "/") return null
    let title = pathname.slice(1, pathname.length - 1)
    title = title[0].toUpperCase() + title.slice(1)
    return (
        <Breadcrumb>
            <Breadcrumb.Item>{<a href="/">Main</a>}</Breadcrumb.Item>
            <Breadcrumb.Item>
                {title}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbsComponent
