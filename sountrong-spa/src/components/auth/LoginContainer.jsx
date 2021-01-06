import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import Login from "./Login";
import { alert } from "../untils/toast";

export const LoginContainer = (props) => {
  let loginHandler = (username, password) => {
    props
      .login(username, password)
      .then((_) => {
        alert.success(`Добро пожаловать ${username}`);
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };
  return (
    <>
      <Login login={loginHandler} isAuth={props.isAuth}/>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
