import React from 'react'
import {withRouter} from "react-router-dom"
import Navlinks from './navlinks'

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
            logoutDisplay: false
        }
        this.signout = this.signout.bind(this)
        this.toggleLogout = this.toggleLogout.bind(this)
    }

    signout(){
        this.props.logout().then(()=>this.props.history.push('/'))
    }


    toggleLogout(){
        // if true show logout div
        this.setState({logoutDisplay : !this.state.logoutDisplay})

    }

    render(){
        let display;
        if (this.state.logoutDisplay === true) {
            display = (<div>
                <button onClick={this.signout}>Log out</button>
            </div>)
        } else {<div></div>}

        return(
            <div className="navbar">
                <FiTwitter size={28}/>
                {/* Home */}    
                <Navlinks Icon={AiOutlineHome} text={"Home"} />
                {/* Explore */}   
                <Navlinks Icon={FaHashtag} text={"Explore"} /> 
                {/* Likes  */}    
                <Navlinks Icon={BsBell} text={"Likes"} />
                {/* Profile  */}    
                <Navlinks Icon={IoPersonOutline} text={"Profile"} />


                {/* chat button that will create a pop up form */}
                <button className="chatbtn"> Chat </button>

                {/* username */}
                {/* <h3>{this.props.currentUser}</h3> */}



                {/* logout section */}
                {display}
                <button onClick={this.toggleLogout}><BsThreeDots /></button>
                

            </div>

        )
    }
}

export default withRouter(Navbar)