import React from "react"
import Link from "react-router-dom"
import { render } from "react-dom";
import LoginContainer from "../sessions/login_container"
import SessionContainer from "../sessions/session_container"
import { FaTwitter } from "react-icons/fa";

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
        <div className="splash">
            <div>
                <FaTwitter size={32} 
                            style={{color:"white"}} />

                
                {/* login/signup forms */}

                <h1> Happening now </h1>
                {/* <h2> Join Chatter today. </h2> */}
                {display}

                
                {/* <LoginContainer /> */}
            </div>

        </div>
    )
}
}

export default Splash