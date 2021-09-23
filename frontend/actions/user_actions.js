import * as UserApiUtil from '../utils/user_api_util'


const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = user => {
    return{
    type: RECEIVE_USER,
    user
    }

}

export const getUser = () => {
    return UserApiUtil.fetchUser()
    .then(user => dispatch(receiveUser(user)))
} 