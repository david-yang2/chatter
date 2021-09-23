import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ChatsReducer from './chat_reducer';
import UserReducer from './user_reducer'


const RootReducer = combineReducers({
    session: SessionReducer,
    chats: ChatsReducer,
    user: UserReducer

});

export default RootReducer;