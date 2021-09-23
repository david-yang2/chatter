import React from "react"
import Feed from '../feed/feed'

class Profile extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUser()
    }


    render(){
        if (Object.values(this.props.user).length < 1) return null

        const {user} = this.props
        debugger
        return(
            <div>
                <div>profile</div>
                <button>Chats</button> 
                {Object.values(user.chats).map()}
                <button>LIkes</button>
            </div>
        )
    }
}

export default Profile