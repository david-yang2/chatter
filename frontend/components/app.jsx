import React from "react"
import { Route, Switch } from "react-router-dom";
import NavbarContainer from "./navbar/navbar_container"
import Splash from "./splash/splash";
import ExploreContainer from "./explore/explore_container"
import HomeContainer from "./home/home_container"
import ProfileContainer from "./profile/profile_container"
import FooterContainer from "./footer/footer_container"
import {AuthRoute,
    ProtectedRoute} from "../util/route_api_util";


const App = () => {

    const Navbar= (path) => {
        if (path === "/") return <ProtectedRoute path="/" component={NavbarContainer} />
    }

    const Footer = (path) => {
        if (path === "/") return <ProtectedRoute path="/" component={FooterContainer} />
    }

    
    return (
        <div className = 'app' id='app'>
                <AuthRoute exact path="/" component = {Splash} />
                {Navbar(window.location.pathname)}
                <ProtectedRoute path="/home" component={HomeContainer} />
                <ProtectedRoute path="/explore" component={ExploreContainer} />
                <ProtectedRoute path="/profile" component={ProfileContainer} />
                {Footer(window.location.pathname)}
        </div>
    )}

export default App;

