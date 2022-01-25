import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
  render () {
    if (!this.props.business.photo_urls) return null;
    return (
      <div>
        <Link to={`/businesses/${this.props.business.id}`} className='business-item'>
          <div className="business-item-container">
            {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} className="business-index-photo" src={photo_url} alt=""/>)}
              <div className="business-item-title-container">
                <h2 className="business-item-title">{this.props.business.name}</h2>
                <div className="business-item-details">
                  <h6 className="business-item-category">{this.props.business.category}</h6>
                  <h6 className="business-item-price">{this.props.business.price}</h6>
                </div>
              </div>
              <br />
              
          </div>
          <div className="business-item-review-container">
            <p className="business-item-review">"{this.props.business.reviews.body}"</p>
          </div>
        </Link>
      </div>
    )
  }
}

export default BusinessIndexItem
