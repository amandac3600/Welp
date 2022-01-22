import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = <nav>
         <h1>Welcome {this.props.currentUser.username}!</h1>
         <button onClick={() => this.props.logout()}>Log Out</button>
         </nav>
    } else {
      nav = <nav className='nav'>
        <Link className="nav-login" to='/login'>Log In</Link> <br />
        <Link className="nav-signup" to='/signup'>Sign Up</Link>
       </nav>
    }

    return (
      nav
    )
  }
}
