import React from "react";
import ReviewIndexContainer from "../review/review_index_container";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";
import { AiOutlineStar } from 'react-icons/ai';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBusiness(this.props.match.params.businessId);
    this.props.fetchReviews(this.props.match.params.businessId)
    this.setState({ loading: false })
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
    if (this.state.loading === true) {
      return <div className="loader"></div>
    }

    return (
      <div className="business-show">
        <div className="red-nav">
          <NavContainer/>
        </div>
        <div className="show-body">
          <div className="business-show-photos">
            {this.props.business.photo_urls.slice(0, 3).map((photo_url, idx) => <img key={idx} className="business-show-photo" src={photo_url} alt="" />)}
            <div className="gradient">
              
            </div>
            <div className="business-show-info">
              <h1 className="business-show-title">{this.props.business.name}</h1>
              <div className="business-show-rating-container">
                <p id="business-show-rating" className={`${this.starRating()}`}></p>
                <p className="business-show-rating-length">{this.props.business.reviews.length} reviews</p>
              </div>
              
              <div className="business-show-details-container">
                <p className="business-show-details-icon"></p>
                <h6 className="business-show-details-claimed">Claimed</h6>
                <h6 className="business-show-details">• &nbsp; {this.props.business.price} &nbsp; • &nbsp; {this.props.business.category}</h6>
              </div>
              <h6 className="business-show-hours">{this.props.business.open} - {this.props.business.close}</h6>
            </div>
          </div>
          <div className="business-show-write-container">
            <AiOutlineStar className="business-show-write-star"/>
            <Link to={`/businesses/${this.props.business.id}/reviews/new`}>
              <button className="business-show-write">Write a Review</button>
            </Link>
          </div>
          <p className="business-show-divider"></p>

          <div className="show-website-container">
            <div className="show-website">
              <a className="show-website-link" href={`${this.props.business.website}`} target="_blank" rel="noopener noreferrer">{this.props.business.website}</a>
            </div>
            <h2 className="show-phone-number">{this.props.business.phone_number}</h2>
            <div className="show-address-container">
              <div className="show-address-label">
                <a className="show-address-link" href={`https://maps.google.com/?q=${this.props.business.lat},${this.props.business.lng}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
              </div>
              <h2 className="show-address">{this.props.business.address} {this.props.business.city}, CA</h2>
              <h2 className="show-zip">{this.props.business.zip_code}</h2>
            </div>
          </div>
          <div className="show-details-website-container">
              <div className="business-show-more-details">
              <h2 className="business-show-location-title">Location &amp; Hours</h2>
              <div className="business-show-location-hours">
                <div className="business-show-map-container">
                  <div className="business-show-map">
                    <a href={`https://maps.google.com/?q=${this.props.business.lat},${this.props.business.lng}`} target="_blank" rel="noopener noreferrer"><img src={this.props.business.photo_urls[this.props.business.photo_urls.length - 1]} alt="" /></a>
                  </div>
                  <div className="business-show-address">
                    <div className="business-show-address-address">
                      <a className="business-show-address-address-link" href={`https://maps.google.com/?q=${this.props.business.lat},${this.props.business.lng}`} target="_blank" rel="noopener noreferrer">{this.props.business.address}</a>
                    </div>
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
  
              </div>
              <h2 className="business-show-reviews-title">Recommended Reviews</h2>
                <div className="business-show-reviews">
                  <div className="business-show-review">
                    <ReviewIndexContainer business={this.props.business}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
        

        
        <p className='show-block-3'></p>
          <div className='show-about-discover'>
            <div className='splash-about'>
              <h6 className='splash-about-title'>About</h6>
              <a className='splash-about-link' href="https://www.linkedin.com/in/amanda-chen-4b175a146" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className='splash-about-link' href="https://angel.co/u/amanda-chen-13" target="_blank" rel="noopener noreferrer">AngelList</a>
            </div>
            <div className='splash-discover'>
              <h6 className='splash-discover-title'>Discover</h6>
            <a className='splash-discover-link' href="https://github.com/amandac3600/Welp" target="_blank" rel="noopener noreferrer">Github</a>
              <br />
              <div className='splash-discover-link-2'>
                <a className='splash-discover-link' href="mailto:amandac3600@gmail.com?subject=Let's talk about a job!">Email</a>
              </div>
            </div>
          </div>
        
      </div>
    )
  }
}

export default BusinessShow
