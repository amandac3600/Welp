import { connect } from "react-redux";
import { fetchReviews, updateReview, deleteReview } from "../../actions/review_actions";
import { fetchUsers } from "../../actions/session_actions";
import ReviewIndex from './review_index'

const mapStateToProps = (state, ownProps) => ({
  // business: state.entities.businesses[ownProps.match.params.businessId],
  reviews: Object.values(state.entities.reviews),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: businessId => dispatch(fetchReviews(businessId)),
  fetchUsers: () => dispatch(fetchUsers()),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)
