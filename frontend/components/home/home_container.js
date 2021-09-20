import {connect} from 'react-redux'
import Home from "./home"
import {getChats} from "../../actions/chat_actions"




const mapStateToProps = state => {
    return {
        chats: state.chats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getChats: () => dispatch(getChats())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)