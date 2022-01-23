import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = <nav>
         <h1>Welcome, {this.props.currentUser.first_name}!</h1>
         <button onClick={() => this.props.logout()}>Log Out</button>
         </nav>
    } else {
      nav = <nav className='nav'>
        <h3 className='nav-businesses'>Businesses</h3>
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
