import React from "react";
import ReviewIndexItem from './review_index_item'

export default class ReviewIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.business)
    this.props.fetchUsers()
    console.log('hello')
    this.props.fetchReviews(this.props.business.id)
  }

  render() {
    console.log(this.props.reviews)
    if (!this.props.reviews) return null
    return (
      <div>
        {this.props.reviews.map(review => <ReviewIndexItem key={review.id} review={review} business={this.props.business} users={this.props.users} deleteReview={this.props.deleteReview}/>)}
      </div>
    )
  }
}
