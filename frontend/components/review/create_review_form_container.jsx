import { connect } from "react-redux";
import { createReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import CreateReviewForm from './create_review_form'

const mapStateToProps = (state, ownProps) => ({
  formType: 'Create Review',
  business: state.entities.businesses[ownProps.match.params.businessId],
  currentUser: state.entities.users[state.session.id],
  user_id: state.session.id,
  errors: Object.values(state.errors.review),
})

const mapDispatchToProps = dispatch => ({
  createReview: (review, businessId) => dispatch(createReview(review, businessId)),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)
