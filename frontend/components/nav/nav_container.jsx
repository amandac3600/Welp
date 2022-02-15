import { connect } from 'react-redux';
import { receiveUser, logout, receiveErrors } from '../../actions/session_actions';
import { searchBusinesses } from '../../actions/business_actions';
import Nav from './nav'

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  searchBusinesses: (query) => dispatch(searchBusinesses(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

