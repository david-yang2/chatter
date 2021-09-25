import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import {createChat} from "../../actions/chat_actions"

// allow us to create a button that will allow current user to log out
import { logout } from '../../actions/session_actions';

// make sure to pass down our currentUser from our state to NavBar component
const mapStateToProps = state => {
  return{
  currentUser: state.session.currentUser,
  newChat: {
    body: '',
    author_id: ''
    } 
  }
};


// make sure to pass down the logout function as well
const mapDispatchToProps = dispatch => {
  return{
    createChat: newChat => dispatch(createChat(newChat)),
    logout: () => dispatch(logout()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
