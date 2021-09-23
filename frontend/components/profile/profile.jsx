import React from "react"
import Feed from '../feed/feed'

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
                                                    chat={chat}/>)}
                </div>
            )
        } else if (this.state.selected === "Likes") {
            // display chats current user liked
            display = (
                <div>
                    {Object.values(user.likes).map((likedChat, idx) => <Feed key={idx}
                                                    chat={likedChat}/>)}
                </div>
            )
        }

        return(
            <div>
                <div>profile</div>
                <button onClick={() => this.changeDisplay("Chats")}>Chats</button> 
                <button onClick={() => this.changeDisplay("Likes")}>Likes</button>
                {display}

            </div>
        )
    }
}

export default Profile