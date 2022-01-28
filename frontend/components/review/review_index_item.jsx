import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai'
import { Link } from 'react-router-dom';

export default class ReviewIndexItem extends React.Component {
  starRating () {
    if (!this.props.review) return null;
    let rating = this.props.review.rating
    console.log(rating)
    if (rating >= 4.75) {
      return "review-item-rating-5"
    } else if (rating >= 4.25) {
      return "review-item-rating-4-5"
    } else if (rating >= 3.75) {
      return "review-item-rating-4"
    } else if (rating >= 3.25) {
      return "review-item-rating-3-5"
    } else if (rating >= 2.75) {
      return "review-item-rating-3"
    } else if (rating >= 2.25) {
      return "review-item-rating-2-5"
    } else if (rating >= 1.75) {
      return "review-item-rating-2"
    } else if (rating >= 1.25) {
      return "review-item-rating-1-5"
    } else if (rating >= 0.75) {
      return "review-item-rating-1"
    } 
  }

  render () {
    return (
      <div className='review-index-item'>
        <div className='review-item-profile'>
          <h2 className='review-item-pic'></h2>
          <h2 className='review-item-profile-name'>{this.props.review.author_first_name} {this.props.review.author_last_name}</h2>
          <div className='review-dropdown'>
            <div className='ellipsis'><AiOutlineEllipsis/></div>
            <div className='review-dropdown-links'>
              <Link className='review-dropdown-link' to={`/businesses/${this.props.business.id}/reviews/${this.props.review.id}/edit`}>Edit Review</Link>
            </div>
          </div>
          
        </div>
        <h2 id="review-item-rating" className={`${this.starRating()}`}></h2>
        <p className='review-item-body'>{this.props.review.body}</p>
      </div>
    )
  }
}
