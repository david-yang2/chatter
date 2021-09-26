import * as LikeApiUtil from "../util/like_api_util"

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"

const receiveLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}


export const getLikes = () => dispatch => {
    return LikeApiUtil.fetchLikes()
    .then(likes => dispatch(receiveLikes(likes)))
}


export const createLike = like => dispatch =>{
    return LikeApiUtil.postLike(like)
    .then(likes => dispatch(receiveLikes(likes)))

}