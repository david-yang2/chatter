import React from "react"
import { Route, Switch } from "react-router-dom";
import NavbarContainer from "./navbar/navbar_container"
import Splash from "./splash/splash";
import ExploreContainer from "./explore/explore_container"
import HomeContainer from "./home/home_container"
import LikesContainer from "./likes/likes_container"
import FooterContainer from "./footer/footer_container"


const App = () => {
    return (
    <div className = 'app'>
        <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <NavbarContainer /> }/>
        <Route exact path="/" component = {Splash} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/explore" component={ExploreContainer} />
        <Route path="/likes" component={LikesContainer} />
        <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <FooterContainer /> }/>



    </div>
    )}

export default App;
