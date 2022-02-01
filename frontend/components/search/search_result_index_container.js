import { connect } from 'react-redux';
import SearchResultIndex from './search_result_index'
import { fetchBusiness, fetchBusinesses } from "../../actions/business_actions";
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  businesses: Object.values(state.entities.businesses),
});

const mapDispatchToProps = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses()),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultIndex)
