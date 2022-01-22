import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {

  render() {
    let nav;
    if (this.props.currentUser) {
      nav = <div>
         <h1>Welcome {this.props.currentUser.username}!</h1>
         <button onClick={() => this.props.logout()}>Log Out</button>
         </div>
    } else {
      nav = <div>
         <Link to='/signup'>Sign Up</Link> <br />
         <Link to='/login'>Log In</Link>
       </div>
    }

    return (
      <div className="login-signup">
        {nav}
      </div>
    )
  }
}
