import {
    RECEIVE_ALL_CHATS,
    RECEIVE_CHAT
} from '../actions/chat_actions'



const ChatsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);



    let nextState = Object.assign({}, oldState);


    switch (action.type) {
        case RECEIVE_ALL_CHATS:
            // sort chats by created_at date (newest first)
            nextState = Object.values(action.chats).sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at)})

            return nextState

        case RECEIVE_CHAT:
            return action.chat;
        default:
            return oldState
    }
}

export default ChatsReducer;