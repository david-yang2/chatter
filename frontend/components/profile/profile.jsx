import React, { useReducer } from "react"
import Feed from '../feed/feed'
import Avatar from "../avatar/avatar"

class Profile extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            selected: "Chats"
        }

        this.changeDisplay = this.changeDisplay.bind(this)
    
    }

    componentDidMount(){
        this.props.getUser()
    }

    changeDisplay(category){
        this.setState({selected: category})
    }


    render(){
        if (Object.values(this.props.user).length < 1) return null

        const {user} = this.props

        let display;

        // change display based on button clicked
        if (this.state.selected === "Chats"){
            // display chats submitted by current user
            display = (
                <div>
                    {Object.values(user.chats).map((chat, idx) => <Feed key={idx}
                                                    chat={chat}
                                                    origin={"chats"}/>)}
                </div>
            )
        } else if (this.state.selected === "Likes") {
            // display chats current user liked
            display = (
                <div>
                    {Object.values(user.likes).map((likedChat, idx) => <Feed key={idx}
                                                    chat={likedChat}
                                                    origin={"likes"}/>)}
                </div>
            )
        }

        return(
            <div className="profile">
                <div className="profileHeader">
                    <Avatar username={user.username} origin="profile"/>
                    <h3>{user.username}</h3>
                    <div> Joined: {new Date(user.created_at).toLocaleString('default', { month: 'long', year: 'numeric' })} </div>
                </div>
                <div className="profileSelections">
                    <button onClick={() => this.changeDisplay("Chats")}>Chats</button> 
                    <button onClick={() => this.changeDisplay("Likes")}>Likes</button>
                </div>
                {display}
            </div>
        )
    }
}

export default Profile