import React from 'react';
import { Link } from 'react-router-dom'
import NavContainer from '../nav/nav_container'
import bg from '../../../app/assets/images/bg.jpg'
import logo from '../../../app/assets/images/logo.png'
import SearchBar from '../search/search_bar';
import SearchBarContainer from '../search/search_bar_container';

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }

    this.clearErrors = this.clearErrors.bind(this)
  }

  clearErrors(e) {
    this.props.clearErrors()
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.searchBusinesses
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading === true) {
      return <div className="loader"></div>
    }
    return (
      <div>
        <img src={window.bg} className='bg' />
        <div className='splash-nav'>
          <NavContainer/>
        </div>
        <header className='splash-logo'>
            <Link className="splash-logo-link" to="/">welp</Link>
            <Link className='logo-2' to="/"><img src={window.logo} width='70' height='50'/></Link>
        </header>
        <SearchBarContainer/>  
        <p className='block'></p>
        <h4 className='splash-best-bus'>Find the Best Restaurants In Town</h4>
        <div className='splash-best-bus-list'>
          <Link to='/search/chinese' className='splash-best-bus-item-1' onClick={this.clearErrors}>
            <div id='splash-best-bus-item-1-pic'></div>
            <p className='splash-best-bus-item-1-label'>Chinese</p>
          </Link>
          <Link to='/search/korean' className='splash-best-bus-item-2' onClick={this.clearErrors}>
            <div id='splash-best-bus-item-2-pic'></div>
            <p className='splash-best-bus-item-2-label'>Korean</p>
          </Link>
          <Link to='/search/desserts' className='splash-best-bus-item-3' onClick={this.clearErrors}>
            <div id='splash-best-bus-item-3-pic'></div>
            <p className='splash-best-bus-item-3-label'>Desserts</p>
          </Link>
          <Link to='/search/italian' className='splash-best-bus-item-4' onClick={this.clearErrors}>
            <div id='splash-best-bus-item-4-pic'></div>
            <p className='splash-best-bus-item-4-label'>Italian</p>
          </Link>
        </div>
        <p className='block-2'></p>
        <h4 className='splash-welp-la'>Welp Los Angeles</h4>
        <h5 className='splash-hot-new'>Hot &amp; New Businesses</h5>
        <ul className='splash-hot-new-list'>
          <Link to='/businesses/25' className='splash-hot-new-item'>
            <div className='hot-new-pic-1'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Milk Jar Cookies</p>
              <div className='hot-new-info-rating-container-1'>
                <p className='hot-new-info-rating-1'></p>
                <p className='hot-new-info-reviews-1'>2 reviews</p>
              </div>
              
              <p className='hot-new-info-category'>Desserts</p>
            </div>
            
          </Link>
          <Link to='/businesses/18' className='splash-hot-new-item'>
            <div className='hot-new-pic-2'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Woodcat Coffee Bar</p>
              <div className='hot-new-info-rating-container-2'>
                <p className='hot-new-info-rating-2'></p>
                <p className='hot-new-info-reviews-2'>2 reviews</p>
              </div>
              <p className='hot-new-info-category'>Coffee &amp; Tea</p>
            </div>
          </Link>
          <Link to='/businesses/10' className='splash-hot-new-item'>
            <div className='hot-new-pic-3'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Masa of Echo Park</p>
              <div className='hot-new-info-rating-container-3'>
                <p className='hot-new-info-rating-3'></p>
                <p className='hot-new-info-reviews-3'>2 reviews</p>
              </div>
              <p className='hot-new-info-category'>Pizza</p>
            </div>
          </Link>
        </ul>
        <p className='block-3'></p>
        <div className='splash-about-discover'>
          <div className='splash-about'>
            <h6 className='splash-about-title'>About</h6>
            <a className='splash-about-link' href="https://www.linkedin.com/in/amanda-chen-4b175a146" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
