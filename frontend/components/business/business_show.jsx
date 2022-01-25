import React from "react";

class BusinessShow extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render () {
    if (!this.props.business || !this.props.business.photo_urls) return null;
    console.log(this.props.business)
    return (
      <div>
        <h1 className="business-show-title">{this.props.business.name}</h1>
        <h6 className="business-show-details">{this.props.business.price} • {this.props.business.category}</h6>
        {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} src={photo_url} alt=""/>)}
      </div>
    )
  }
}

export default BusinessShow
