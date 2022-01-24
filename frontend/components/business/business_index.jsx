import React from "react";
import BusinessIndexItem from "./business_index_item";

class BusinessIndex extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchBusinesses())
    this.props.fetchBusinesses()
  }

  render () {
    console.log(this.props.businesses)
    return (
      <div>
        <ul>
          {this.props.businesses.map(business => <BusinessIndexItem business={business}/>)}
        </ul>
      </div>
    )
  }
}

export default BusinessIndex
