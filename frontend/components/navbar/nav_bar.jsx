import React from 'react'
import {withRouter} from "react-router-dom"


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
                <h3> nav bar will go here</h3>
                {/* Home */}    
                {/* Explore */}    
                {/* Likes  */}    
                {/* Profile  */}    


                {/* chat button that will create a pop up form */}

                {/* logout button */}
                <button onClick={this.signout}>Log out</button>

            </div>

        )
    }
}

export default withRouter(Navbar)