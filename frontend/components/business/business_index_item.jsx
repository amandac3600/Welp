import React from "react";
import { Link } from "react-router-dom";

class BusinessIndexItem extends React.Component {
  
  render () {
    return (
      <div>
        <Link to={`/businesses/${this.props.business.id}`} className='business-item'>
          <h2 className="business-item-title">{this.props.business.name}</h2>
          <div className="business-item-details">
            <h6 className="business-item-category">{this.props.business.category}</h6>
            <h6 className="business-item-price">{this.props.business.price}</h6>
          </div>
        </Link>
      </div>
    )
  }
}

export default BusinessIndexItem
