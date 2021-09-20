



export const fetchChats = () => {
    return $.ajax({
        url:`/api/chats`,
        method: `GET`
    })
}