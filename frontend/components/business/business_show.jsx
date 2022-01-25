import React from "react";

class BusinessShow extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  render () {
    if (!this.props.business) return null;
    if (!this.props.business.photo_urls) return null;
    console.log(this.props.business)
    return (
      <div>
        <h1 className="business-show-title">{this.props.business.name}</h1>
        <h6 className="business-show-details">{this.props.business.price} • {this.props.business.category}</h6>
        <h6 className="business-show-hours">{this.props.business.open} - {this.props.business.close}</h6>
        {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} className="business-show-photo" src={photo_url} alt=""/>)}
      </div>
    )
  }
}

export default BusinessShow
