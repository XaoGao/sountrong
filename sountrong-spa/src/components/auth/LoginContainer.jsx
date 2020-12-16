import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer'
import Login from "./Login";

let mapStateToProps = (state) => {
  return {};
};


export default connect(mapStateToProps, { login })(Login)