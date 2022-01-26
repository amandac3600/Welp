import React from "react";
import ReviewIndexContainer from "../review/review_index_container";
import NavContainer from "../nav/nav_container";

class BusinessShow extends React.Component {
  componentDidMount() {
    // this.props.fetchBusiness(this.props.match.params.businessId).then(() => console.log(this.props.business))
    this.props.fetchBusiness(this.props.match.params.businessId);
    // console.log(this.props.match.params.businessId)
    this.props.fetchReviews(this.props.match.params.businessId)
    // console.log(this.props.business)
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      this.componentDidMount()
    }
  }

  starRating () {
    console.log("hellooo:", this.props.business.reviews)
    console.log("rating:", this.props.business.reviews[0].rating)
    if (!this.props.business.reviews) return null;
    let avgRating = 0;
    Object.keys(this.props.business).forEach(key => {
      if (key === "reviews") {
        this.props.business.reviews.forEach(review => {
          avgRating += review.rating
        })
      }
    })
    console.log(this.props.business)
    let rating = avgRating.toFixed(2)
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
    this.props.business.reviews.forEach(review => {
      if (!review.rating) return null;
    })
    
    return (
      <div className="business-show">
        <div className="business-show-nav">
          <NavContainer/>
        </div>
        <h1 className="business-show-title">{this.props.business.name}</h1>
        <p id="business-show-rating" className={`${this.starRating()}`}></p>
        <h6 className="business-show-details">{this.props.business.price} • {this.props.business.category}</h6>
        <h6 className="business-show-hours">{this.props.business.open} - {this.props.business.close}</h6>
        <div className="business-show-photos">
          {this.props.business.photo_urls.map((photo_url, idx) => <img key={idx} className="business-show-photo" src={photo_url} alt=""/>)}
        </div>
        <div className="business-show-reviews">
          <ReviewIndexContainer business={this.props.business}/>
        </div>
        
      </div>
    )
  }
}

export default BusinessShow
