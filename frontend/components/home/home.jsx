import React from "react"
import Chatbox from "../chatbox/chatbox"
import Feed from "../feed/feed"




class Home extends React.Component{

    constructor(props){
        super(props)

    }


    componentDidMount(){
        this.props.getChats()
    }

    

    render(){
        debugger
        if (!this.props.chats) return null

        const {chats} = this.props
        debugger

        return(
            <div>
                <h3>Home</h3>
                {/* create form to post a new chat */}
                <Chatbox />


                {/* fetch and render all chats */}
                <Feed />
                <Feed />
                <Feed />
                <Feed />
                <Feed />
                <Feed />



            </div>
        )
    }
}

export default Home