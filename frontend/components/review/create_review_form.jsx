import React from "react";
import NavContainer from '../nav/nav_container'
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      body: '',
      user_id: this.props.user_id,
      business_id: this.props.match.params.businessId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review);
    this.props.history.push(`/businesses/${this.props.business.id}`);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  clearErrors(e) {
    this.props.clearReviewErrors()
  }

  render () {
    let errors;
    if (this.props.errors.length) {
      errors = this.props.errors.map((error, index)=> 
        (<li key={index} className="review-error">{error}</li>)
      )
      let error = document.getElementById('errors');
      error.classList.add('review-errors')
    }
    if (!this.props.business) return null;
    // if (this.handleSubmit) {
    //   <Redirect to={`/businesses/${this.props.business.id}`}/>
    // }
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        <form onSubmit={this.handleSubmit} className="create-review-form">
          <Link className="create-review-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <div className="create-form-rating-container">
            <div>
              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio1" id="create-form-rating" className="create-form-rating-1"></label>

              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio2" id="create-form-rating" className="create-form-rating-2"></label>

              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio3" id="create-form-rating" className="create-form-rating-3"></label>

              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio4" id="create-form-rating" className="create-form-rating-4"></label>

              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio5" id="create-form-rating" className="create-form-rating-5"></label>
            </div>
            <textarea className="create-review-body" onChange={this.handleChange('body')}></textarea>
          </div>
          <button type="submit" className="create-review-submit">Post Review</button>
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
