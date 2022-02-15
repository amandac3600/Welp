import React from "react";
import NavContainer from '../nav/nav_container';
import { BsSquareFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

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
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.createReview(review, this.props.business.id).then(() => this.props.history.push(`/businesses/${this.props.business.id}`))
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
    }
    if (!this.props.business) return null;
    
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        <form onSubmit={this.handleSubmit} className="create-review-form">
          <Link className="create-review-title" to={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link>
          <div className="create-form-rating-container">

            <div className="create-form-rating-container-2">
              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio5" id="create-form-rating" className="create-form-rating-5"><AiFillStar className="rating-star" /></label>
                
              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio4" id="create-form-rating" className="create-form-rating-4"><AiFillStar className="rating-star" /></label>
                
              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio3" id="create-form-rating" className="create-form-rating-3"><AiFillStar className="rating-star" /></label>
                
              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio2" id="create-form-rating" className="create-form-rating-2"><AiFillStar className="rating-star"/></label>
                
              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio1" id="create-form-rating" className="create-form-rating-1"><AiFillStar className="rating-star" /></label>
            </div>
            <textarea className="create-review-body" onChange={this.handleChange('body')} placeholder="If you want to find the world's best street burrito, look no further. Whenever I'm craving a California Burrito, I immediately head to this food truck. For $12, they stuff in fries, guacamole, sour cream, and your choice of meat. The employees like to keep the line moving, which is great especially during lunch. There's so many things to try outside of burritos though. Better to place your order ahead of time to skip the line."></textarea>
          </div>
          <button type="submit" className="create-review-submit" onClick={this.clearErrors}>Post Review</button>
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
