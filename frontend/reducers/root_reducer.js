import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ChatsReducer from './chat_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    chats: ChatsReducer

});

export default RootReducer;