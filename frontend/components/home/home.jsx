import React from "react"
import Chatbox from "../chatbox/chatbox"
import Feed from "../feed/feed"
import Avatar from "../avatar/avatar"




class Home extends React.Component{

    constructor(props){
        super(props)
    
        this.submitChat = this.submitChat.bind(this)
        this.likeChat = this.likeChat.bind(this)
    }


    componentDidMount(){
        this.props.getChats()
    }


    submitChat(newChat){
        newChat.author_id = this.props.currentUser.id
        this.props.createChat(newChat)

    }

    likeChat(chatId){
        this.props.createLike({user_id: this.props.currentUser.id,
                                chat_id: chatId })
    }

    render(){
        if (!this.props.chats) return null

        const {chats, currentUser} = this.props
        return(
            <div className="home">
                <h3>Home</h3>
                <div className="userChatbox">
                    <div className="userAvatar"> 
                        <Avatar username={currentUser.username} />
                    </div>
                    {/* create form to post a new chat */}
                    <Chatbox newChat={this.props.newChat}
                            submitChat={this.submitChat}
                            chatboxRequest="home"/>

                </div>
                
                {/* fetch and render all chats */}
                {Object.values(chats).map((chat,idx) => <Feed key={idx} 
                                                                chat={chat}
                                                                likeChat={this.likeChat} />)}

            </div>
        )
    }
}

export default Home