import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import HomePage from "../pages/homePage"
import UserPage from "../pages/userPage/userPage"
import FavoritesPage from "../pages/favoritesPage/favoritesPage"
import ErrorPage from "../pages/errorPage"

const Routers = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/users/:userId" component={UserPage}/>
            <Route path="/favorites" component={FavoritesPage}/>
            <Route path="/error" component={ErrorPage}/>
            <Redirect to="/error"/>
        </Switch>
    )
}

export default Routers