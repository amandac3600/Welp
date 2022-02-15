import { connect } from 'react-redux';
import Splash from './splash'
import { clearErrors } from "../../actions/business_actions";

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => {
  return {
  clearErrors: () => dispatch(clearErrors())
}};

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
