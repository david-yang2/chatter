import React from "react"
import Feed from "../feed/feed"


class Explore extends React.Component{
    constructor(props){
        super(props)

        this.filterChats = this.filterChats.bind(this)
    }

    componentDidMount(){
        this.props.getChats()
    }

    filterChats(topic){
        this.props.filterChats(topic)
    }

    render(){
        if (Object.values(this.props.chats).length <1) return null

        const {chats} = this.props
        return (
            <div className="explore">
                <h3>Explore</h3>                
                <div className="exploreSelections">
                    {/* filter based on topics */}
                    <button onClick={()=> this.filterChats("")}>All</button>
                    <button onClick={()=> this.filterChats("Technology")}>Technology</button>
                    <button onClick={()=> this.filterChats("Sports")}>Sports</button>
                    <button onClick={()=> this.filterChats("Finance")}>Finance</button>
                </div>

                {/* <Feed /> */}

                {Object.values(chats).map((chat, idx) => <Feed key = {idx} 
                                                                chat={chat}/>)}
                
            </div>
        )
    }

}


export default Explore