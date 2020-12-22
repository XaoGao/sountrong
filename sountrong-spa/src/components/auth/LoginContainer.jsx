import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import Login from "./Login";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
