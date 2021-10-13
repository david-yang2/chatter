import React from "react";
import { withRouter } from "react-router-dom";

class Session extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.formContents

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.useDemoLogin = this.useDemoLogin.bind(this)
    }
    
    handleInput(type){
        return (e) => {

            this.setState({[type]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // const {history} = this.props;
        this.props.action(this.state)
    }
    // allows user to use default login
    useDemoLogin(){
        this.props.action({username:"David", password:"DavidDemo"})
    }

    // remember password validates the length of 6
    render(){
        let display;

        if (this.props.formType === "signup") {

            {/* SIGNUP FORM */}
            display = (
                <div className="session-form">
                    <h1>Join Chatter today.</h1>
                    <form >
                        <input
                            placeholder="Username:"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                        <input
                            placeholder="Email:"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                        <input 
                            placeholder="Password:"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <div >
                            <button onClick={this.handleSubmit}>Sign Up</button>
                        </div>
                    </form>
                </div>)
        } else if (this.props.formType === "login") {

            {/* LOGIN FORM */}
            display = (
                    <div className="session-form">
                        <h1>Log in to Chatter!</h1>
                        <form>
                            <input
                                placeholder="Username:"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
    
                            <input
                                placeholder="Password:"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <div>
                                <button onClick={() => this.handleSubmit()}>Login</button>
                                <button onClick={()=> this.useDemoLogin()}>Demo User</button>
                            </div>
                        </form>
                    </div>
            )
        }
        return(
            <div className="session">
                {display}
            </div>
        )
    }
}

export default withRouter(Session);