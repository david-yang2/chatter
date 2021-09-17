import {connect} from "react-redux";
import  {createNewUser} from "../../actions/session_actions";
import Session from "./session";

const mapStateToProps = dispatch => ({
    formContents: {
        username: '',
        email: '',
        password:'',
    },
    formType: "signup",
});

const mapDispatchToProps = dispatch => {
    return {
    action: formUser => dispatch(createNewUser(formUser)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Session);