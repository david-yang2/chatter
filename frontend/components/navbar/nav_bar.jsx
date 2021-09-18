import React from 'react'
import {withRouter} from "react-router-dom"
import Navlinks from './navlinks'

//Icons from react icons
import { AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";




class Navbar extends React.Component{
    constructor(props){
        super(props)
        
        this.signout = this.signout.bind(this)
    }

    signout(){
        this.props.logout().then(()=>this.props.history.push('/'))
    }

    render(){
        return(
            <div>
                <FiTwitter />
                {/* Home */}    
                <Navlinks Icon={AiOutlineHome} text={"Home"} />
                {/* Explore */}   
                <Navlinks Icon={FaHashtag} text={"Explore"} /> 
                {/* Likes  */}    
                <Navlinks Icon={BsBell} text={"Likes"} />
                {/* Profile  */}    
                <Navlinks Icon={IoPersonOutline} text={"Profile"} />


                {/* chat button that will create a pop up form */}
                <button> Chat </button>

                {/* logout button */}
                <button onClick={this.signout}>Log out</button>

            </div>

        )
    }
}

export default withRouter(Navbar)