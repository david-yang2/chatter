
import * as ChatApiUtil from "../util/chat_api_util"



export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS"
export const RECEIVE_CHAT = "RECEIVE_CHAT"


const receiveChats = chats => ({
    type: RECEIVE_ALL_CHATS,
    chats
})

const receiveChat = chat => {
    debugger
    return {
    type: RECEIVE_CHAT,
    chat}
}


export const getChats = () => dispatch => {
    return ChatApiUtil.fetchChats()
    .then(chats => dispatch(receiveChats(chats)))
};


export const createChat = newChat => dispatch => {
    debugger
    return ChatApiUtil.postChat(newChat)
    .then(newChatAdded => dispatch(receiveChats(newChatAdded)))
}