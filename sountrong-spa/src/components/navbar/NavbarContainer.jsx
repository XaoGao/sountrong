import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.username,
  };
};
export default connect(mapStateToProps, {})(Navbar);
