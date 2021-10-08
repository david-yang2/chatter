import React from 'react'
import {withRouter} from "react-router-dom"
import Navlinks from './navlinks'
import Chatbox from "../chatbox/chatbox"
import Avatar from "../avatar/avatar"

//Icons from react icons
import { AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";


class Navbar extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            logoutDisplay: false,
            chatDisplay: false,
            newChat: this.props.newChat
        }
        this.signout = this.signout.bind(this)
        this.toggleLogout = this.toggleLogout.bind(this)
        this.submitChat = this.submitChat.bind(this)
        this.toggleChat = this.toggleChat.bind(this)
    }

    signout(){
        this.props.logout()
    }

    toggleLogout(bool, e){
        // if true show logout div
        e.stopPropagation();
        this.setState({logoutDisplay : bool})
    }

    toggleChat(bool, e){
        // true => open chat box
        e.stopPropagation();
        this.setState({chatDisplay: bool})
    }

    submitChat(newChat){
        newChat.author_id = this.props.currentUser.id
        this.props.createChat(newChat)
    }

    render(){
        let modalClass = "chatmodal"
        let logoutdisplay;

        const {currentUser} = this.props

        if (this.state.logoutDisplay === true) {
            logoutdisplay = (<div onClick={(e) => this.toggleLogout(false, e)}className="logoutContainer">
                                <div className="logoutDisplay">
                                    <div>
                                        @{currentUser.username}
                                    </div>
                                    <button onClick={() => this.signout()}>Log out @{currentUser.username} </button>
                                </div>
                            </div>)
        } else {<div></div>}

        let chatdisplay;

        if (this.state.chatDisplay === true) {
            // document.getElementById("app").style.opacity="0.5"
            modalClass = "chatmodalOpen"
            chatdisplay = (<div onClick={(e) => this.toggleChat(true,e)} className="navChatBox">
                                <button onClick={(e) => this.toggleChat(false,e)}>x</button>
                                <Chatbox newChat={this.props.newChat}
                                            submitChat={this.submitChat}
                                            chatboxRequest="navbar" 
                                            toggleChat={this.toggleChat}/>
                                
                            </div>)
        } else {<div></div>}

        return(
            <div className="navbar">
                <div className="navlinks">
                    <FiTwitter size={28}/>
                    {/* Home */}    
                    <Navlinks Icon={AiOutlineHome} text={"Home"} />
                    {/* Explore */}   
                    <Navlinks Icon={FaHashtag} text={"Explore"} /> 
                    {/* Likes  */}    
                    {/* <Navlinks Icon={BsBell} text={"Likes"} /> */}
                    {/* Profile  */}    
                    <Navlinks Icon={IoPersonOutline} text={"Profile"} />
            
                    {/* chat button that will create a pop up form */}
                    <button onClick={(e)=>this.toggleChat(true,e)}className="chatbtn"> Chat </button>
                    <div className={modalClass} onClick={(e) => this.toggleChat(false,e)}>
                        {chatdisplay}
                    </div>
                    {/* {chatdisplay} */}

                </div>
                
                {/* logout section */}
                <div>
                    {logoutdisplay}
                    <button className="sessionBtn" onClick={(e) => this.toggleLogout(true, e)}> 
                                <Avatar username={currentUser.username}/>
                                <div style={{marginLeft: "5%", marginRight: "30%"}}>@{currentUser.username}</div> 
                                <BsThreeDots /> 
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)