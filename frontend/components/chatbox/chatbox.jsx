import React from "react"



class Chatbox extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.newChat
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    update(field){
   
      return e => {
  
        this.setState({[field]: e.currentTarget.value});
      }
    }
  
    handleSubmit(){
  
      this.props.submitChat(this.state)
    }


  render (){
    return(
      <form onSubmit={this.handleSubmit}>
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