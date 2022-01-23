import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = state => ({
  errors: Object.values(state.errors),
  formType: 'Log In'
})

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  demologin: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
