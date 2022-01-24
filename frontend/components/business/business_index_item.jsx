import React from "react";

class BusinessIndexItem extends React.Component {
  
  render () {
    console.log(this.props.business.name)
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
