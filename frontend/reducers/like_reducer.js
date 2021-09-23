
import{
    RECEIVE_ALL_CHATS
} from "../actions/like_actions"

const LikesReducer = (oldState={}, action)=>{
    Object.freeze(oldState);
    
    switch(action.type) {
        case RECEIVE_ALL_CHATS:
            return action.likes
        default:
            return oldState
    }
}

export default LikesReducer