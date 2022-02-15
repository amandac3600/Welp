import { connect } from 'react-redux';
import BusinessIndex from './business_index'
import { fetchBusiness, fetchBusinesses, searchBusinesses } from "../../actions/business_actions";
import { clearErrors, logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses),
  currentUser: state.entities.users[state.session.id],
  errors: Object.values(state.errors),
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  searchBusinesses: query => dispatch(searchBusinesses(query)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex)
