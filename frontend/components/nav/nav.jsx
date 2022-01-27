import React from 'react';
import { Link } from 'react-router-dom'
export default class Nav extends React.Component {

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = <nav className='nav-user'>
        <div id="hidden" className='nav-user-bar'>
          <Link className="nav-user-bar-link" to="/">welp</Link>
          <Link className='nav-user-bar-logo' to="/"><img src={window.logo} width='35' height='25'/></Link>
        </div>
        <Link id="hidden-bus" className="nav-businesses" to='/businesses'>Businesses</Link>
        <div className='nav-user-logout'>
          <h1 className='nav-user-welcome'>Welcome, {this.props.currentUser.first_name}!</h1>
          <button className='nav-user-button' onClick={() => this.props.logout()}>Log Out</button>
        </div>
      </nav>
    } else {
      nav = <nav className='nav'>
        <div id="hidden" className='nav-bar'>
          <Link className="nav-bar-link" to="/">welp</Link>
          <Link className='nav-bar-logo' to="/"><img src={window.logo} width='40' height='25'/></Link>
        </div>
        <Link id='hidden-bus' className="nav-businesses" to='/businesses'>Businesses</Link>
        <div className="nav-login-signup">
          <Link className="nav-login" to='/login'>Log In</Link>
          <Link className="nav-signup" to='/signup'>Sign Up</Link>
        </div>
       </nav>
    }

    return (
      nav
    )
  }
}
