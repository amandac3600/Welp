import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
  starRating () {
    if (!this.props.business.photo_urls) return null;
    let avgRating = 0;
    Object.keys(this.props.business).forEach(key => {
      if (key === "reviews") {
        Object.values(this.props.business.reviews).forEach(review => {
          avgRating += review.rating
        })
      }
    })
    let rating = (avgRating/this.props.business.reviews.length).toFixed(2)
    if (rating >= 4.75) {
      return "business-item-rating-5"
    } else if (rating >= 4.25) {
      return "business-item-rating-4-5"
    } else if (rating >= 3.75) {
      return "business-item-rating-4"
    } else if (rating >= 3.25) {
      return "business-item-rating-3-5"
    } else if (rating >= 2.75) {
      return "business-item-rating-3"
    } else if (rating >= 2.25) {
      return "business-item-rating-2-5"
    } else if (rating >= 1.75) {
      return "business-item-rating-2"
    } else if (rating >= 1.25) {
      return "business-item-rating-1-5"
    } else if (rating >= 0.75) {
      return "business-item-rating-1"
    } 
  }

  render () {
    return (
      <div>
        <Link to={`/businesses/${this.props.business.id}`} className='business-item'>
          <div className="business-item-container">
            {[this.props.business.photo_urls[0]].map((photo_url, idx) => <img key={idx} className="business-index-photo" src={photo_url} alt=""/>)}
              <div className="business-item-title-container">
                <h2 className="business-item-title">{this.props.business.name}</h2>
                <p id="business-item-rating" className={`${this.starRating()}`}></p>
                
                <div className="business-item-details">
                  <h6 className="business-item-category">{this.props.business.category}</h6>
                  <h6 className="business-item-price">{this.props.business.price}</h6>
                </div>
                <p className="business-item-hours">Hours: {this.props.business.open} - {this.props.business.close}</p>
                <div className="business-item-review-container">
                  <p className="business-item-review-icon">💬</p>
                  <p className="business-item-review">"{Object.values(this.props.business.reviews)[0].body}"</p>
                </div>
              </div>
          </div>
          
        </Link>
      </div>
    )
  }
}

export default BusinessIndexItem
