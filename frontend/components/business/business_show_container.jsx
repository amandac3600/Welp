import { connect } from "react-redux";
import { fetchBusiness } from "../../actions/business_actions";
import { fetchReviews } from "../../actions/review_actions";
import BusinessShow from './business_show';


const mapStateToProps = (state, ownProps) => ({
  business: state.entities.businesses[ownProps.match.params.businessId],
  currentUser: state.entities.users[state.session.id],
  reviews: Object.values(state.entities.reviews),
});

const mapDispatchToProps = dispatch => ({
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  fetchReviews: businessId => dispatch(fetchReviews(businessId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
