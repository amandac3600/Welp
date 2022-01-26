import React from 'react';

export default class ReviewIndexItem extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.users[this.props.review.user_id]}</h2>
        <h2>{this.props.review.rating}</h2>
        <p>{this.props.review.body}</p>
      </div>
    )
  }
}
