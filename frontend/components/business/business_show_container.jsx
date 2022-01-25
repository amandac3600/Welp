import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import BusinessShow from './business_show';


const mapStateToProps = (state, ownProps) => {
  return (
    {business: state.entities.businesses[ownProps.match.params.businessId],
    currentUser: state.entities.users[state.session.id],}
  )
};

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
