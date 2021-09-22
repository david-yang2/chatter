
import * as ChatApiUtil from "../util/chat_api_util"

export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS"
export const RECEIVE_CHAT = "RECEIVE_CHAT"


const receiveChats = chats => {
    return {
        type: RECEIVE_ALL_CHATS,
        chats
    }
}


const receiveChat = chat => {
    return {
    type: RECEIVE_CHAT,
    chat}
}


export const getChats = () => dispatch => {
    return ChatApiUtil.fetchChats()
    .then(chats => dispatch(receiveChats(chats)))
};


export const createChat = newChat => dispatch => {
    return ChatApiUtil.postChat(newChat)
    .then(newChat => dispatch(receiveChat(newChat)))
}

export const filterChats = topic => dispatch => {
    return ChatApiUtil.postTopic(topic)
    .then(filteredChat => dispatch(receiveChats(filteredChat)))
}

export const search = term => dispatch => {
    debugger
    return ChatApiUtil.postSearch(term)
    .then(searchResult => dispatch(receiveChats(searchResult)))
}