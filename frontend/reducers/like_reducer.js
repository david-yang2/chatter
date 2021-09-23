
import{
    RECEIVE_ALL_LIKES
} from "../actions/like_actions"

const LikesReducer = (oldState={}, action)=>{
    Object.freeze(oldState);
    
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes
        default:
            return oldState
    }
}

export default LikesReducer