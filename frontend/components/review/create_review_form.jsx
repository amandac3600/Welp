import React from "react";

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
        <h1 className="create-review-title">{this.props.business.name}</h1>
      </div>
    )
  }
}
