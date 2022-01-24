import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavContainer from "../nav/nav_container";

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render () {
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        
        <ul>
          {this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business}/>)}
        </ul>
      </div>
    )
  }
}

export default BusinessIndex
