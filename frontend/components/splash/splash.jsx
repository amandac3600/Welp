import React from 'react';
import { Link } from 'react-router-dom'
import NavContainer from '../nav/nav_container'
import bg from '../../../app/assets/images/bg.jpg'
import logo from '../../../app/assets/images/logo.png'

export default class Splash extends React.Component {
  render () {
    return (
      <div>
        <img src={bg} className='bg' />
        <NavContainer/>
        <header className='splash-logo'>
            <Link className="splash-logo-link" to="/">welp</Link>
            <Link className='logo-2' to="/"><img src={window.logo} width='70' height='50'/></Link>
        </header>
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
          <li className='splash-hot-new-item'>
            Milk Jar Cookies
          </li>
          <li className='splash-hot-new-item'>
            Woodcat Coffee &amp; Tea
          </li>
          <li className='splash-hot-new-item'>
            Masa of Echo Park
          </li>
        </ul>
      </div>
    )
  }
}
