import React from "react";

export default class UpdateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.review.body,
      rating: this.props.review.rating,
      user_id: this.props.review.user_id,
      business_id: this.props.match.params.businessId,
      reviewId: this.props.review.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews();
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.clearReviewErrors();
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state, this.props.match.params.businessId)
  }

  handleChange(field) {
    return (e) => {this.setState({[field]: e.currentTarget.value})}
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
        </form>
      </div>
    )
  }

}

