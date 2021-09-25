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
  
    handleSubmit(e){
      e.preventDefault();
      this.props.submitChat(this.state);
      !this.props.toggleChat ? null : this.props.toggleChat(false,e)
    }

  render (){

    let chatboxOrigin;
    let handleEvent;

    if (this.props.chatboxRequest === "navbar") {
      chatboxOrigin = "navbarChat";
      handleEvent = (<input onClick={(e) => this.props.toggleChat(false,e)} type="submit" value="Chat"/>)
    } else if (this.props.chatboxRequest === "home") {
      chatboxOrigin = "homeChat"
      handleEvent = (<input type="submit" value="Chat" />)
    }

    return(
      <form className={chatboxOrigin} onSubmit={(e) => this.handleSubmit(e)}>
          <textarea
            placeholder="What's happening?"
            value={this.state.body}
            onChange={this.update('body')}
          />
          {<input type="submit" value="Chat" />}
      </form>
    );
  }
}

export default Chatbox