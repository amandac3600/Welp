import React from "react";
import NavContainer from '../nav/nav_container'

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
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render () {
    if (!this.props.business) return null;
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        <form onSubmit={this.handleSubmit} className="create-review-form">
          <h1 className="create-review-title">{this.props.business.name}</h1>
          <div className="create-form-rating-container">
            <div>
              <input id="radio5" type="radio" value="5" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio5" id="create-form-rating" className="create-form-rating-5"></label>

              <input id="radio4" type="radio" value="4" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio4" id="create-form-rating" className="create-form-rating-4"></label>
              
              <input id="radio3" type="radio" value="3" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio3" id="create-form-rating" className="create-form-rating-3"></label>
              
              <input id="radio2" type="radio" value="2" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio2" id="create-form-rating" className="create-form-rating-2"></label>
              
              <input id="radio1" type="radio" value="1" name="rating" onChange={this.handleChange("rating")} />
              <label htmlFor="radio1" id="create-form-rating" className="create-form-rating-1"></label>
            </div>
            <textarea className="create-review-body"></textarea>
          </div>
          <button type="submit" className="create-review-submit">Post Review</button>
        </form>
      </div>
    )
  }
}
