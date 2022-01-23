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
            <Link className='logo-2' to="/"><img src={logo} width='70' height='50'/></Link>
        </header>
      </div>
    )
  }
}
