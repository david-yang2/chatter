import React from "react"



class Chatbox extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.newChat
        // this.state={
        //   body: "",
        //   author_id: ""
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    update(field){
   
      return e => {
  
        this.setState({[field]: e.currentTarget.value});
      }
    }
  
    handleSubmit(){
      this.props.submitChat(this.state)
      // .then(this.setState({body: ""})) => submitChat does not return anything?
    }


  render (){

    let chatboxOrigin;

    if (this.props.chatboxRequest === "navbar") {
      chatboxOrigin = "navbarChat"
    } else if (this.props.chatboxRequest === "home") {
      chatboxOrigin = "homeChat"
    }
    
    return(
      <form className={chatboxOrigin} onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={this.state.body}
            onChange={this.update('body')}
          />
        <input type="submit" value="Chat" />
      </form>
    );
  }
}

export default Chatbox