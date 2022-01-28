import React from "react";
import ReviewIndexContainer from "../review/review_index_container";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";

class BusinessShow extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId)
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      this.componentDidMount()
    }
  }

  starRating () {
    if (this.props.reviews.length === 0) return null;
    let avgRating = 0;
    this.props.reviews.forEach(review => {
      avgRating += review.rating
    })
    let rating = (avgRating/this.props.reviews.length).toFixed(2)
    if (rating >= 4.75) {
      return "business-show-rating-5"
    } else if (rating >= 4.25) {
      return "business-show-rating-4-5"
    } else if (rating >= 3.75) {
      return "business-show-rating-4"
    } else if (rating >= 3.25) {
      return "business-show-rating-3-5"
    } else if (rating >= 2.75) {
      return "business-show-rating-3"
    } else if (rating >= 2.25) {
      return "business-show-rating-2-5"
    } else if (rating >= 1.75) {
      return "business-show-rating-2"
    } else if (rating >= 1.25) {
      return "business-show-rating-1-5"
    } else if (rating >= 0.75) {
      return "business-show-rating-1"
    } 
  }

  render () {
    
    if (!this.props.business) return null;
    if (!this.props.business.photo_urls) return null;
    if (!this.props.business.reviews) return null;
    return (
      <div className="business-show">
        <div className="red-nav">
          <NavContainer/>
        </div>
        <h1 className="business-show-title">{this.props.business.name}</h1>
        <p id="business-show-rating" className={`${this.starRating()}`}></p>
        <div className="business-show-details-container">
          <p className="business-show-details-icon"></p>
          <h6 className="business-show-details-claimed">Claimed</h6>
          <h6 className="business-show-details">• &nbsp; {this.props.business.price} &nbsp; • &nbsp; {this.props.business.category}</h6>
        </div>
        <h6 className="business-show-hours">{this.props.business.open} - {this.props.business.close}</h6>
        
        <div className="business-show-write-container">
          <p className="business-show-write-star">☆</p>
          <Link to={`/businesses/${this.props.business.id}/reviews/new`}>
            <button className="business-show-write">Write a Review</button>
          </Link>
        </div>
        
        <p className="business-show-divider"></p>
        <div className="show-details-website-container">
            <div className="business-show-more-details">
            <h2 className="business-show-location-title">Location &amp; Hours</h2>
            <div className="business-show-location-hours">
              <div className="business-show-map-container">
                <div className="business-show-map">
                  <p>Map Here</p>
                </div>
                <div className="business-show-address">
                  <p className="business-show-address-address">{this.props.business.address}</p>
                  <p className="business-show-address-city">{this.props.business.city}, CA {this.props.business.zip_code}</p>
                </div>
              </div>
              <div className="business-show-more-hours">
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Mon</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Tue</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Wed</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Thu</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Fri</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Sat</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
                <div className="business-show-hours-item">
                  <p className="business-show-hours-item-day">Sun</p>
                  <p>{this.props.business.open} - {this.props.business.close}</p>
                </div>
              </div>
              <div className="show-website-container">
                <h2 className="show-website">{this.props.business.website}</h2>
                <h2 className="show-phone-number">{this.props.business.phone_number}</h2>
                <div className="show-address-container">
                  <h2 className="show-address-label">Get Directions</h2>
                  <h2 className="show-address">{this.props.business.address} {this.props.business.city}, CA</h2>
                  <h2 className="show-zip">{this.props.business.zip_code}</h2>
                </div>
                
              </div>
            </div>
            <h2 className="business-show-reviews-title">Recommended Reviews</h2>
              <div className="business-show-reviews">
                <div className="business-show-review">
                  <ReviewIndexContainer business={this.props.business}/>
                </div>
              </div>
          </div>
        </div>

        
        <p className='show-block-3'></p>
          <div className='show-about-discover'>
            <div className='splash-about'>
              <h6 className='splash-about-title'>About</h6>
              <a className='splash-about-link' href="https://www.linkedin.com/in/amanda-chen-4b175a146">LinkedIn</a>
            </div>
            <div className='splash-discover'>
              <h6 className='splash-discover-title'>Discover</h6>
              <a className='splash-discover-link' href="https://github.com/amandac3600">Github</a>
            </div>
          </div>
        <div className="business-show-photos">
          {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} className="business-show-photo" src={photo_url} alt=""/>)}
        </div>
      </div>
    )
  }
}

export default BusinessShow
