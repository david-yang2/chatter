import {connect} from "react-redux";
import  {login} from "../../actions/session_actions";
import Session from "./session";


const mapStateToProps = state => ({
    formContents: {
        username: '',
        password:'',
    },
    formType: "login",
});

const mapDispatchToProps = dispatch => {
    return {
        action: formUser => dispatch(login(formUser)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Session);