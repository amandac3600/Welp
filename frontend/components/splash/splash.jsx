import React from 'react';
import { Link } from 'react-router-dom'
import NavContainer from '../nav/nav_container'
import bg from '../../../app/assets/images/bg.jpg'
import logo from '../../../app/assets/images/logo.png'
import SearchBar from '../search/search_bar';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <img src={bg} className='bg' />
        <div className='splash-nav'>
          <NavContainer/>
        </div>
        <header className='splash-logo'>
            <Link className="splash-logo-link" to="/">welp</Link>
            <Link className='logo-2' to="/"><img src={window.logo} width='70' height='50'/></Link>
        </header>
        {/* <SearchBar/>   */}
        <p className='block'></p>
        <h4 className='splash-best-bus'>Find the Best Restaurants In Town</h4>
        <ul className='splash-best-bus-list'>
          <li className='splash-best-bus-item'>Chinese</li>
          <li className='splash-best-bus-item'>Korean</li>
          <li className='splash-best-bus-item'>Mexican</li>
          <li className='splash-best-bus-item'>Italian</li>
        </ul>
        <p className='block-2'></p>
        <h4 className='splash-welp-la'>Welp Los Angeles</h4>
        <h5 className='splash-hot-new'>Hot &amp; New Businesses</h5>
        <ul className='splash-hot-new-list'>
          <Link to='' className='splash-hot-new-item'>
            <div className='hot-new-pic-1'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Milk Jar Cookies</p>
              <p className='hot-new-info-rating'></p>
            </div>
            
          </Link>
          <Link to='' className='splash-hot-new-item'>
            <div className='hot-new-pic-2'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Woodcat Coffee Bar</p>
              <p className='hot-new-info-rating'></p>
            </div>
          </Link>
          <Link to='' className='splash-hot-new-item'>
            <div className='hot-new-pic-3'></div>
            <div className='hot-new-pic-info'>
              <p className='hot-new-info-title'>Masa of Echo Park</p>
              <p className='hot-new-info-rating'></p>
            </div>
          </Link>
        </ul>
        <p className='block-3'></p>
        <div className='splash-about-discover'>
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
