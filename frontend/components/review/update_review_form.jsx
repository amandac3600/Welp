import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "../nav/nav_container";

export default class UpdateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      body: '',
      rating: null,
      user_id: '',
      business_id: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.reviewState = this.reviewState.bind(this);
  }

  componentDidMount() {
    // this.props.fetchReviews()
    console.log(this.props.match.params.reviewId)
    this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId).then((e)=> this.reviewState());
    this.props.fetchBusiness(this.props.match.params.businessId);
  };

  reviewState(e) {
    this.setState({
      id: this.props.review.id,
      body: this.props.review.body,
      rating: this.props.review.rating,
      user_id: this.props.review.user_id,
      business_id: this.props.review.business_id
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateReview(this.state, this.props.match.params.businessId).then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
  }

  handleChange(field) {
    if (field === 'rating') {
      return (e) => { this.setState({ [field]: parseInt(e.currentTarget.value) }) }
    } else {
      return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }
  }

  clearErrors(e) {
    this.props.clearReviewErrors()
  }

  render() {
    if (!this.props.business) return null;
    if (!this.props.review) return null;
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((error, index) =>
        (<li key={index} className="review-error">{error}</li>)
      )
      let error = document.getElementById('errors');
      error.classList.add('review-errors')
    }
    console.log(this.state.rating)
    console.log(this.state.body)
    return (
      <div>
        <div className="red-nav">
          <NavContainer />
        </div>
        <form onSubmit={this.handleSubmit} className="update-review-form">
          <Link className="update-review-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <div className="update-form-rating-container">
            <div className="update-form-rating-container-2">
              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 1} />
              <label htmlFor="radio1" id="update-form-rating" className="update-form-rating-1"></label>

              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 2}/>
              <label htmlFor="radio2" id="update-form-rating" className="update-form-rating-2"></label>

              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 3}/>
              <label htmlFor="radio3" id="update-form-rating" className="update-form-rating-3"></label>

              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 4}/>
              <label htmlFor="radio4" id="update-form-rating" className="update-form-rating-4"></label>

              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 5}/>
              <label htmlFor="radio5" id="update-form-rating" className="update-form-rating-5"></label>
            </div>
            <textarea className="update-review-body" onChange={this.handleChange('body')} value={this.state.body}></textarea>
          </div>
          <button type="submit" className="update-review-submit">Update Review</button>
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

