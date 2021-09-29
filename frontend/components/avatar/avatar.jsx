import React from "react"



class Avatar extends React.Component{
    constructor (props){
        super(props)


        this.getInitials = this.getInitials.bind(this)
    }

    getInitials(username){
        let initials =""
        username.toUpperCase().split(" ").map(word => initials += word[0])
        
        return initials
    }

    render(){

        // set background color based on first letter of initial
        const olive = ['A', 'B', 'C', 'Y']                             //"#808000"
        const aqua = ['D', 'E', 'F']                                   //"#00FFFF"
        const limegreen = ['G', 'H', 'I']                               //"#32CD32"
        const orange = ['J', 'K', 'L', "Z"]                            //"#FFA500"
        const maroon = [ 'M', 'N', 'O']                                //"#800000"
        const violet = ['P', 'Q', 'R']                                 //"#D02090"
        const royalblue = ['S', 'T', 'U']                              //"#4876FF"
        const coral = ['V', 'W', 'X']                                  //"#FF7F50"

        const colorHash = {
            ...Object.fromEntries(
            olive.map(key => [key, "#808000"])
            ),
            ...Object.fromEntries(
            aqua.map(key => [key, "#00FFFF"])
            ),
            ...Object.fromEntries(
            limegreen.map(key => [key, "#32CD32"])
            ),
            ...Object.fromEntries(
            orange.map(key => [key, "#FFA500"])
            ),
            ...Object.fromEntries(
            maroon.map(key => [key, "#800000"])
            ),
            ...Object.fromEntries(
            violet.map(key => [key, "#D02090"])
            ),
            ...Object.fromEntries(
            royalblue.map(key => [key, "#4876FF"])
            ),
            ...Object.fromEntries(
            coral.map(key => [key, "#FF7F50"])
            )
    
          };
        
        let initials = this.getInitials(this.props.username)
        let avatarColor = colorHash[initials[0]]
        return(
            <div style={{
                    backgroundColor: avatarColor,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%' }} >
                {initials}
            </div>
        )
    }


}


export default Avatar