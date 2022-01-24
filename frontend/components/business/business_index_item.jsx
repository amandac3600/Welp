import React from "react";

class BusinessIndexItem extends React.Component {
  
  render () {
    return (
      <div>
        <li>
          {this.props.business.name}
        </li>
      </div>
    )
  }
}

export default BusinessIndexItem
