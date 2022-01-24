import React from "react";

class BusinessShow extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render () {
    // console.log(this.props.business)
    return (
      <div>
        {/* <h1 className="business-show-title">{this.props.business.name}</h1> */}
        {/* <h6 className="business-show-details">{this.props.business.price} • {this.props.business.category}</h6> */}
      </div>
    )
  }
}

export default BusinessShow
