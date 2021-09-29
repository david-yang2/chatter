import React from "react"
import Avatar from "../avatar/avatar"
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toggleFollow: false
        }

        this.followPopup = this.followPopup.bind(this)
    }
    followPopup(bool, e){
            e.stopPropagation();
            this.setState({toggleFollow: bool})
        
    }
    render(){
        const {chat} = this.props
        let display;
        if (this.state.toggleFollow === false) {
            display = (<div></div>)
        } else {
            display = (<div className="followContainer">
                            <button onClick={(e)=> this.followPopup(false,e)}>
                                follow
                            </button>
                        </div>)
        }

        return(
            <div onClick={(e)=>this.followPopup(false,e)} className="feed">
                {/* avatar, message, likes and replies */}
                <div className="feedHeader">
                    <div className="userInfo">
                        <div className="avatar">
                            <Avatar username={chat.username}/>
                        </div>
                        <h5>{chat.username}</h5>
                    </div>
                    <div>
                        <button className="followBtn" onClick={(e)=>this.followPopup(true,e)}><BsThreeDots /></button>
                        {display}
                    </div> 
                </div>

                    {/* content */}
                <div className="feedContent">
                    <div>{chat.body}</div>
                    <button onClick={(e)=>this.props.likeChat(chat.id)}><AiOutlineHeart /></button>
                </div>
            </div>
        )
    }
}

export default Feed