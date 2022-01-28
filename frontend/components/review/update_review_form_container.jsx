import { connect } from "react-redux";
import { fetchReview, updateReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchBusiness } from "../../actions/business_actions";
import UpdateReviewForm from './create_review_form'

const mapStateToProps = (state, ownProps) => ({
  formType: 'Update Review',
  review: state.entities.reviews[ownProps.match.params.reviewId],
  business: state.entities.businesses[ownProps.match.params.businessId],
  currentUser: state.entities.users[state.session.id],
  user_id: state.session.id,
  errors: Object.values(state.errors.review),
})

const mapDispatchToProps = dispatch => ({
  updateReview: (review, businessId) => dispatch(updateReview(review, businessId)),
  fetchBusiness: businessId => dispatch(fetchBusiness(businessId)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateReviewForm)
