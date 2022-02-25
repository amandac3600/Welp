import React from "react";
import ReviewIndexItem from './review_index_item'

export default class ReviewIndex extends React.Component {
  componentDidMount() {
    // this.props.fetchUsers()
    this.props.fetchReviews(this.props.business.id)
  }

  render() {
    if (!this.props.reviews) return null
    return (
      <div>
        {this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} business={this.props.business} users={this.props.users} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/>)}
      </div>
    )
  }
}
