import React from "react";
import BusinessIndexItem from "./business_index_item";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBusinesses()
  }

  render () {
    if (!this.props.businesses) return null;
    return (
      <div>
        <div className="red-nav">
          <NavContainer/>
        </div>
        
        <ol className="business-index-list">
          {this.props.businesses.map((business, idx) => 
          <li key={idx}>
            <BusinessIndexItem idx={idx} business={business} fetchBusiness={this.props.fetchBusiness}/>
          </li>)}
        </ol>
      </div>
    )
  }
}

export default BusinessIndex
