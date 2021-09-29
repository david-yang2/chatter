import {connect} from "react-redux"
import Profile from "./profile"
import {getUser} from "../../actions/user_actions"
// import {getLikes} from "../../actions/like_actions"

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)