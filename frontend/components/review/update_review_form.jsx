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
    this.props.fetchReview(this.props.match.params.reviewId);
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.clearReviewErrors();
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state, this.props.match.params.businessId)
  }

  handleChange(field) {
    return (e) => { this.setState({ [field]: e.currentTarget.value }) }
  }

  render() {
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((error, index) =>
        (<li key={index} className="review-error">{error}</li>)
      )
      let error = document.getElementById('errors');
      error.classList.add('review-errors')
    }
    if (!this.props.review) return null;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="update-review-form">
          <Link className="update-review-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <div className="update-form-rating-container">
            <div className="update-form-rating-container-2">
              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio1" id="update-form-rating" className="update-form-rating-1"></label>

              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio2" id="update-form-rating" className="update-form-rating-2"></label>

              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio3" id="update-form-rating" className="update-form-rating-3"></label>

              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio4" id="update-form-rating" className="update-form-rating-4"></label>

              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio5" id="update-form-rating" className="update-form-rating-5"></label>
            </div>
            <textarea className="update-review-body" onChange={this.handleChange('body')} value={this.state.body}></textarea>
          </div>
          <button type="submit" className="update-review-submit">Post Review</button>
          <div className='errors-container'>
            <ul id="errors">
              {errors}
            </ul>
          </div>
        </form>
      </div>
    )
  }

}

