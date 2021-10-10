import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import HomePage from "../pages/homePage"
import UserPage from "../pages/userPage"
import FavoritesPage from "../pages/favoritesPage"
import ErrorPage from "../pages/errorPage"

const Routers = ({callback}) => {
    return (
        <Switch>
            <Route path="/" render={()=><HomePage callback={callback}/>} exact/>
            <Route path="/users/:userId" component={UserPage}/>
            <Route path="/favorites" component={FavoritesPage}/>
            <Route path="/error" component={ErrorPage}/>
            <Redirect to="/error"/>
        </Switch>
    )
}

export default Routers