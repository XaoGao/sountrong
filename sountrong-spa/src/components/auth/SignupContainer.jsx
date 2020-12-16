import { connect } from "react-redux";
import { signup } from '../../redux/auth-reducer'
import Signup from "./Signup";

let mapStateToProps = (state) => {
  return {};
};


export default connect(mapStateToProps, { signup })(Signup)