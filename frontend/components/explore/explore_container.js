import {connect} from 'react-redux'
import Explore from "./explore"
import {filterChats, getChats} from "../../actions/chat_actions"



const mapStateToProps = state => {
    return {
        chats: state.chats
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        filterChats: topic => dispatch(filterChats(topic)),
        getChats: () => dispatch(getChats()),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Explore)