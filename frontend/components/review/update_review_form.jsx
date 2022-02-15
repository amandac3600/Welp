import React from "react";
import { Link } from "react-router-dom";
import NavContainer from "../nav/nav_container";
import { AiFillStar } from 'react-icons/ai';

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
    window.scrollTo(0, 0);
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
    }
    return (
      <div>
        <div className="red-nav">
          <NavContainer />
        </div>
        <form onSubmit={this.handleSubmit} className="update-review-form">
          <Link className="update-review-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <div className="update-form-rating-container">
            <div className="update-form-rating-container-2">

              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 5} />
              <label htmlFor="radio5" id="update-form-rating" className="update-form-rating-5"><AiFillStar className="rating-star" /></label>

              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 4} />
              <label htmlFor="radio4" id="update-form-rating" className="update-form-rating-4"><AiFillStar className="rating-star" /></label>

              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 3} />
              <label htmlFor="radio3" id="update-form-rating" className="update-form-rating-3"><AiFillStar className="rating-star" /></label>

              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 2}/>
              <label htmlFor="radio2" id="update-form-rating" className="update-form-rating-2"><AiFillStar className="rating-star" /></label>

              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} checked={parseInt(this.state.rating) === 1} />
              <label htmlFor="radio1" id="update-form-rating" className="update-form-rating-1"><AiFillStar className="rating-star" /></label>

            </div>
            <textarea className="update-review-body" onChange={this.handleChange('body')} value={this.state.body} placeholder="If you want to find the world's best street burrito, look no further. Whenever I'm craving a California Burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There's so many things to try outside of burritos though. Better to place your order ahead of time to skip the line."></textarea>
          </div>
          <button type="submit" className="update-review-submit" onClick={this.clearErrors}>Update Review</button>
          <div className='errors-container'>
            <ul id="errors" className="review-errors">
              {errors}
            </ul>
          </div>
        </form>
      </div>
    )
  }

}

