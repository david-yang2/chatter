import {
    RECEIVE_ALL_CHATS,
    RECEIVE_CHAT
} from '../actions/chat_actions'

const ChatsReducer = (oldState ={}, action) => {
    Object.freeze(oldState);

    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_CHATS:
            return action.chats
        case RECEIVE_CHAT:
            nextState = Object.assign(nextState, action.chat)
            return nextState
        default:
            return oldState
    }
}

export default ChatsReducer;