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
    // if (!this.props.business.photo_urls) return null;
    return (
      <div>
        <div className="red-nav">
          <Link className="red-nav-logo-link" to="/">welp</Link>
          <Link className='red-nav-logo' to="/"><img src={window.logo} width='40' height='25'/></Link>
          <NavContainer/>
        </div>
        
        <ol className="business-index-list">
          {this.props.businesses.map((business, idx) => 
          <li key={idx}>
            <BusinessIndexItem business={business} fetchBusiness={this.props.fetchBusiness}/>
          </li>)}
        </ol>
      </div>
    )
  }
}

export default BusinessIndex
