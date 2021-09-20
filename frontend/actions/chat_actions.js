
import * as ChatApiUtil from "../util/chat_api_util"



export const RECEIVE_ALL_CHATS = "RECEIVE_ALL_CHATS"


const receiveChats = chats => ({
    type: RECEIVE_ALL_CHATS,
    chats
})


export const getChats = () => dispatch => {
    return ChatApiUtil.fetchChats()
    .then(chats => dispatch(receiveChats(chats)))
};