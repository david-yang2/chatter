import React from "react"
import { Route, Switch } from "react-router-dom";
import NavbarContainer from "./navbar/navbar_container"
import Splash from "./splash/splash";


const App = () => {
    return (
    <div>
        <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <NavbarContainer /> }/>
        <Route exact path="/" component = {Splash} />

    </div>
    )}

export default App;
