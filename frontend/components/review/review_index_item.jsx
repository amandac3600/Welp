import React from 'react';

export default class ReviewIndexItem extends React.Component {
  render () {
    console.log("review", this.props.review)
    return (
      <div>
        <h2>{this.props.review.author_first_name} {this.props.review.author_last_name}</h2>
        <h2>{this.props.review.rating}</h2>
        <p>{this.props.review.body}</p>
      </div>
    )
  }
}
