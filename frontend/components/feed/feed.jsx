import React from "react"


class Feed extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {chat} = this.props

        return(
            <div className="chat">
                {/* avatar, message, likes and replies */}
                <h5>{chat.username}</h5>
                <div>{chat.body}</div>
            </div>
        )
    }
}

export default Feed