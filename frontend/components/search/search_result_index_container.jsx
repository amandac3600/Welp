import { connect } from 'react-redux';
import SearchResultIndex from './search_result_index'
import { fetchBusiness, fetchBusinesses, searchBusinesses, clearErrors } from "../../actions/business_actions";
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses),
  errors: state.errors.business,
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  searchBusinesses: query => dispatch(searchBusinesses(query)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex)
