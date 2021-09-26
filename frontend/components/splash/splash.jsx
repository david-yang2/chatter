import React from "react"
import Link from "react-router-dom"
import { render } from "react-dom";
import LoginContainer from "../sessions/login_container"
import SessionContainer from "../sessions/session_container"
import { FiTwitter } from "react-icons/fi";

class Splash extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loginForm: false
        }
        this.changeForm = this.changeForm.bind(this)
    }

    componentDidMount(){
        // fetcch all chats
    }
    changeForm(){
        this.setState({loginForm: !this.state.loginForm})
    }

    render(){

    let display;

    if (this.state.loginForm === false) {
        display =   <div> 
                        <SessionContainer /> 
                        <h5>Already have an account? <a onClick={() => this.changeForm()}>Log in</a></h5>
                    </div>
    } else { display =  <div> 
                        <LoginContainer /> 
                        <h5>Don't have an account yet? <a onClick={() => this.changeForm()}>Sign up</a></h5>
                        </div>}

    return (
        <div>
            {/* twitter background */}
            <div>

            </div>
            <FiTwitter size={32}/>

            
            {/* login/signup forms */}

            <h1> Happening now </h1>
            <h3> Join Chatter today. </h3>
            {display}

            
            {/* <LoginContainer /> */}

            

        </div>
    )
}
}

export default Splash