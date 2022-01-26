import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
  render () {
    if (!this.props.business.photo_urls) return null;
    let avgRating = 0;
    Object.keys(this.props.business).forEach(key => {
      if (key === "reviews") {
        // console.log(this.props.business.reviews.rating)
        avgRating += this.props.business.reviews.rating
      }
    })
    return (
      <div>
        <Link to={`/businesses/${this.props.business.id}`} className='business-item'>
          <div className="business-item-container">
            {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} className="business-index-photo" src={photo_url} alt=""/>)}
              <div className="business-item-title-container">
                <h2 className="business-item-title">{this.props.business.name}</h2>
                <h3 className="business-item-rating">{avgRating}</h3>
                <div className="business-item-details">
                  <h6 className="business-item-category">{this.props.business.category}</h6>
                  <h6 className="business-item-price">{this.props.business.price}</h6>
                </div>
                <p className="business-item-hours">Hours: {this.props.business.open} - {this.props.business.close}</p>
                <div className="business-item-review-container">
                  <p className="business-item-review">💬</p>
                  <p className="business-item-review">"{this.props.business.reviews.body}"</p>
                </div>
              </div>
          </div>
          
        </Link>
      </div>
    )
  }
}

export default BusinessIndexItem
