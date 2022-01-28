import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    let nav;
    if (this.props.currentUser && this.props.history.location.pathname === '/') {
      nav = <nav className='nav-user'>
        <Link id="hidden-bus" className="nav-businesses" to='/businesses'>Businesses</Link>
        <div className='nav-user-logout'>
          <h1 className='nav-user-welcome'>Welcome, {this.props.currentUser.first_name}!</h1>
          <button className='nav-user-button' onClick={() => this.props.logout()}>Log Out</button>
        </div>
      </nav>
    } else if (!this.props.currentUser && this.props.history.location.pathname === '/') {
      nav = <nav className='nav'>
        <Link id='hidden-bus' className="splash-businesses" to='/businesses'>Businesses</Link>
        <div className="nav-login-signup">
          <Link className="nav-login" to='/login'>Log In</Link>
          <Link className="nav-signup" to='/signup'>Sign Up</Link>
        </div>
       </nav>
    } else if (!this.props.currentUser && this.props.history.location.pathname !== '/') {
      nav = <nav className='red-nav'>
        <div className='bus-nav-bar'>
          <Link className="bus-nav-bar-link" to="/">welp</Link>
          <Link className='bus-nav-bar-logo' to="/"><img src={window.logo} width='40' height='25' /></Link>
        </div>
        <div className="bus-nav-login-signup">
          <Link className="nav-login" to='/login'>Log In</Link>
          <Link className="nav-signup" to='/signup'>Sign Up</Link>
        </div>
      </nav>
    } else if (this.props.currentUser && this.props.history.location.pathname !== '/') {
      nav = <nav className='red-nav-user'>
        <div className='bus-nav-bar'>
          <Link className="bus-nav-bar-link" to="/">welp</Link>
          <Link className='bus-nav-bar-logo' to="/"><img src={window.logo} width='40' height='25' /></Link>
        </div>
        <div className='red-nav-user-logout'>
          <h1 className='red-nav-user-welcome'>Welcome, {this.props.currentUser.first_name}!</h1>
          <button className='red-nav-user-button' onClick={() => this.props.logout()}>Log Out</button>
        </div>
      </nav>
    }

    return (
      nav
    )
  }
}

export default withRouter(Nav)
