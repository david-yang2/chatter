import {connect} from "react-redux"
import Footer from "./footer"
import {search} from "../../actions/chat_actions"


const mapStateToProps = state => {
    return{
        chats: state.chats,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        search: term => dispatch(search(term))
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Footer)