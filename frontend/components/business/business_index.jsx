import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavContainer from "../nav/nav_container";

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render () {
    if (!this.props.businesses) return null;
    // if (!this.props.business.photo_urls) return null;
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        
        <ol>
          {this.props.businesses.map(business => <BusinessIndexItem key={business.id} business={business} fetchBusiness={this.props.fetchBusiness}/>)}
        </ol>
      </div>
    )
  }
}

export default BusinessIndex
