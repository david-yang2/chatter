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


        // set date and like button to empty div if feed component is within likes component
        let date, likeButton, numLike;
        if (this.props.origin === "likes" || this.props.origin === "chats" ) {
            date = likeButton = (<div></div>)
        } else {
            chat.likedby.length > 1 ? numLike = "likes" : numLike = "like"
            date = <div style={{fontSize:'15px'}}>{new Date(chat.created_at).toDateString()}</div>
            likeButton = <button className="likeBtn" onClick={(e)=>this.props.likeChat(chat.id)}><AiOutlineHeart size={20} /> 
                                                                                                <span style={{paddingLeft: '5px'}}> </span>
                                                                                                {chat.likedby.length} 
                                                                                                <span style={{paddingLeft: '5px'}}> </span> 
                                                                                                {numLike} 
                                                                                </button>
        }

        return(
            <div onClick={(e)=>this.followPopup(false,e)} className="feed">
                {/* avatar, message, likes and replies */}
                <div className="feedHeader">
                    <div className="userInfo">
                        <Avatar username={chat.username}/>
                        <div style={{fontWeight: 'bold'}}>{chat.username}</div>
                        {date}
                    </div>
                    <div>
                        <button className="followBtn" onClick={(e)=>this.followPopup(true,e)}><BsThreeDots /></button>
                        {display}
                    </div> 
                </div>

                    {/* content */}
                <div className="feedContent">
                    <div>{chat.body}</div>
                    {likeButton}
                </div>
            </div>
        )
    }
}

export default Feed