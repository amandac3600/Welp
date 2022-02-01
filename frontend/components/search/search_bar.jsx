import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      find: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchBusinesses(this.state.find).then(() => this.props.history.push(`/search/${this.state.find}`))
  }

  render() {
    let searchBar
    if (this.props.history.location.pathname === '/') {
      searchBar = <div>
        <form className="search-bar-form" onSubmit={this.handleSubmit}>
          <div className="search-find-container">
            <label className="search-find-label">Find
              <input className="search-find-input" type="text" value={this.state.find} onChange={this.handleChange('find')} placeholder="food trucks, barbeque, bubble tea..." />
            </label>
          </div>
          <div className="search-near-container">
            <label className="search-near-label">Near
              <p className="search-near-input">Los Angeles, CA ONLY for now</p>
            </label>
          </div>
          <button className="search-button" type="submit"><AiOutlineSearch /></button>
        </form>
      </div>
    } else {
      searchBar = <div>
        <form className="red-search-bar-form" onSubmit={this.handleSubmit}>
          <div className="red-search-find-container">
            <input className="search-find-input" type="text" onChange={this.handleChange('find')} placeholder="food trucks, barbeque, bubble tea..." />
          </div>
          <div className="red-search-near-container">
              <p className="red-search-near-input">Los Angeles, CA ONLY for now</p>
          </div>
          <button className="red-search-button" type="submit"><AiOutlineSearch /></button>
        </form>
      </div>
    }
    return (
      searchBar
    )
  }
}

export default withRouter(SearchBar)

