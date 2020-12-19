import { connect } from "react-redux";
import Navbar from "./Navbar";
import { logout } from "../../redux/auth-reducer";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.username,
  };
};
export default connect(mapStateToProps, {logout})(Navbar);
