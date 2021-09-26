export const fetchLikes = () => {
    return $.ajax({
        url: '/api/likes',
        method: "GET"
    })
}


export const postLike = likeParams => {
    return $.ajax({
        url: '/api/likes',
        method: "POST",
        data: {like: likeParams}
    })
}