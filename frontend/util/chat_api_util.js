
export const fetchChats = () => {
    return $.ajax({
        url:`/api/chats`,
        method: `GET`,
    })
}

export const postChat = chat => {
    return $.ajax({
        url:`/api/chats`,
        method: "POST",
        data: {chat: chat}, 
    })
}

export const postTopic = topic => {
    return $.ajax({
        url:`/api/explore`,
        method: "POST",
        data: {filteredChat: topic}, 
    })
}

export const postSearch = term => {
    debugger
    return $.ajax({
        url:`/api/search`,
        method: "POST",
        data: {search: term}, 
    })
}