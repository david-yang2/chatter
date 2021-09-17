import React from "react"
import Link from "react-router-dom"
import { render } from "react-dom";
import LoginContainer from "../sessions/login_container"
import SessionContainer from "../sessions/session_container"

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginForm: false
        }
        this.changeForm = this.changeForm.bind(this)
    }

    changeForm(){
        this.setState({loginForm: !this.state.loginForm})
    }

    render(){

    let display;

    if (this.state.loginForm === false) {
        display = <div> <SessionContainer /> </div>
    } else { display = <div> <LoginContainer /> </div>}

    return (
        <div>
            {/* twitter background */}
            <div>

            </div>

            
            {/* login/signup forms */}

            <h1> Happening now </h1>
            <h3> Join Chatter today. </h3>
            {display}

            
            {/* <LoginContainer /> */}

            <h5>Already have an account? <a onClick={() => this.changeForm()}>test</a></h5>

        </div>
    )
}
}

export default Splash