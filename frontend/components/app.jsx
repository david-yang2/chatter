import React from "react"
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar/nav_bar"
import splash from "./splash/splash";


const App = () => {
    return (
    <div>
        <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Navbar /> }/>
        <Route exact path="/" component = {splash} />

    </div>
    )}

export default App;
