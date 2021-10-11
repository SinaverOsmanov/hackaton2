import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import HomePage from "../pages/homePage"
import UserPage from "../pages/userPage"
import FavoritesPage from "../pages/favoritesPage/favoritesPage"
import ErrorPage from "../pages/errorPage"

const Routers = () => {
    return (
        <Switch>
            <Route path="/hackaton2/" exact component={HomePage} />
            <Route path="/hackaton2/users/:userId" component={UserPage}/>
            <Route path="/hackaton2/favorites" component={FavoritesPage}/>
            <Route path="/hackaton2/error" component={ErrorPage}>
                <Redirect to="/hackaton2/error"/>
            </Route>
        </Switch>
    )
}

export default Routers