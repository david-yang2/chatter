import {connect} from 'react-redux'
import Home from "./home"
import {getChats, createChat} from "../../actions/chat_actions"
import {createLike} from "../../actions/like_actions"

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        chats: state.chats,
        newChat: {
            body: '',
            author_id: ''
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getChats: () => dispatch(getChats()),
        createChat: newChat => dispatch(createChat(newChat)),
        createLike: likeChat => dispatch(createLike(likeChat))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)