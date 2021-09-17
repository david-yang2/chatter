import React from "react";

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
        .then(()=> this.props.history.push(`/home`));
    }

    // allows user to use default login
    useDemoLogin(){
        this.props.action({username:"David", password:"DavidDemo"})
        // .then(() => this.props.history.push(`/home`));
    }

    // remember password validates the length of 6
    render(){
        let display;

        if (this.props.formType === "signup") {

            {/* SIGNUP FORM */}
            display = (
            <div >
                <div >
                    <h2 > Create New Account</h2>
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
                </div>
            </div>)
        } else if (this.props.formType === "login") {

            {/* LOGIN FORM */}
            display = (
                <div>
                    <div>
                        <h2> Please Login!</h2>
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
                                <button onClick={this.handleSubmit}>Login</button>
                                <button onClick={this.useDemoLogin}>Demo User</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

        return(
            <div>
                {display}
            </div>
        )
    }
}

export default Session;