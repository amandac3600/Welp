import React from "react";
import BusinessIndexItem from "../business/business_index_item";
import NavContainer from "../nav/nav_container";
import { Link } from "react-router-dom";
import BusinessMap from "../business/business_map";

class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);

    this.clearErrors = this.clearErrors.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.searchBusinesses(this.props.match.params.query)
  }

  clearErrors(e) {
    this.props.clearErrors()
  }

  pricefilter(price) {
    this.clearErrors()
    this.props.searchBusinesses(`${price}`).then(() => this.props.history.push(`/search/${price}`));
  }

  render() {
    if (!this.props.businesses) return null;
    let businesses = this.props.businesses;
    let errors;
    let suggestion;
    let suggestionList
    if (this.props.errors.length) {
      errors = this.props.errors.map((error, index) =>
        (<li key={index}>{error}</li>)
      ) 
      suggestion = 'Suggestions for improving your results:'
      let suggestionarr = ['Check the spelling or try alternate spellings', 'Try a more general search, e.g. "pizza" instead of "pepperoni"']
      
      suggestionList = suggestionarr.map((suggestion, idx) => 
        (<li key={idx}>{suggestion}</li>))
      businesses = [];
    }
    return (
      <div className="business-index">
        <NavContainer />
        <aside className="business-index-sidebar">
          <p className="business-index-filters-title">Filters</p>
          <div className="price-filter">
            <button className="price-filter-item" onClick={() => this.pricefilter('$')}>$</button>
            <button className="price-filter-item" onClick={() => this.pricefilter('$$')}>$$</button>
            <button className="price-filter-item" onClick={() => this.pricefilter('$$$')}>$$$</button>
            <button className="price-filter-item" onClick={() => this.pricefilter('$$$$')}>$$$$</button>
          </div>
        </aside>
        <p className="all-results">All Results</p>

        <div className="index-body">
          <ol className="business-index-list">
            {businesses.map((business, idx) =>
              <li key={idx}>
                <BusinessIndexItem idx={idx} business={business} fetchBusiness={this.props.fetchBusiness} />
              </li>)}
            <ul id="errors" className="search-errors">
              {errors}
              <div className="suggestion">
                {suggestion}
                <ul className="suggestion-list">
                  {suggestionList}
                </ul>
              </div>
            </ul> 
          </ol>
          <div className="index-map-container">
            <BusinessMap businesses={this.props.businesses} />
          </div>
        </div>

        <p className='show-block-3'></p>
        <div className='show-about-discover'>
          <div className='splash-about'>
            <h6 className='splash-about-title'>About</h6>
            <a className='splash-about-link' href="https://www.linkedin.com/in/amanda-chen-4b175a146" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className='splash-about-link' href="https://angel.co/u/amanda-chen-13" target="_blank" rel="noopener noreferrer">AngelList</a>
          </div>
          <div className='splash-discover'>
            <h6 className='splash-discover-title'>Discover</h6>
            <a className='splash-discover-link' href="https://github.com/amandac3600/Welp" target="_blank" rel="noopener noreferrer">Github</a>
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

export default SearchResultIndex
