import React from "react"
import Chatbox from "../chatbox/chatbox"
import Feed from "../feed/feed"




class Home extends React.Component{

    constructor(props){
        super(props)
    
        this.submitChat = this.submitChat.bind(this)
    }


    componentDidMount(){
        this.props.getChats()
    }

    submitChat(newChat){
        newChat.author_id = this.props.currentUser.id
        this.props.createChat(newChat)
    }

    render(){
        if (!this.props.chats) return null

        const {chats} = this.props
        
        debugger
        return(
            <div>
                <h3>Home</h3>
                {/* create form to post a new chat */}
                <Chatbox newChat={this.props.newChat}
                         submitChat={this.submitChat}/>


                {/* fetch and render all chats */}
                {Object.values(chats).map((chat,idx) => <Feed key={idx} chat={chat} />)}



            </div>
        )
    }
}

export default Home