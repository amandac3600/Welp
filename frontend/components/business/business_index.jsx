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
      <div className="business-index">
        <NavContainer/>

        <aside className="business-index-sidebar">
          <p className="business-index-filters-title">Filters</p>
          <div className="price-filter">
            <button className="price-filter-item">$</button>
            <button className="price-filter-item">$$</button>
            <button className="price-filter-item">$$$</button>
            <button className="price-filter-item">$$$$</button>
          </div>
        </aside>
        <p className="all-results">All Results</p>

        <div className="index-body">
          <ol className="business-index-list">
            {this.props.businesses.map((business, idx) => 
            <li key={idx}>
              <BusinessIndexItem idx={idx} business={business} fetchBusiness={this.props.fetchBusiness}/>
            </li>)}
          </ol>
          <div className="index-map-container">
            <div className="index-map">

            </div>
          </div>
        </div>
        
        <p className='show-block-3'></p>
        <div className='show-about-discover'>
          <div className='splash-about'>
            <h6 className='splash-about-title'>About</h6>
            <a className='splash-about-link' href="https://www.linkedin.com/in/amanda-chen-4b175a146">LinkedIn</a>
          </div>
          <div className='splash-discover'>
            <h6 className='splash-discover-title'>Discover</h6>
            <a className='splash-discover-link' href="https://github.com/amandac3600">Github</a>
            <br />
            <div className='splash-discover-link-2'>
              <a className='splash-discover-link' href="mailto:amandac3600@gmail.com?subject=Let's talk about a job!">Email</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex
