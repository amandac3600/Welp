import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    let errors;
    if (this.props.errors[0].length) {
      errors = this.props.errors.map((error, index)=> 
        (<li key={index}>{error}</li>)
      )
    }
    if (this.handleSubmit) {
      <Redirect to="/"/>
    }
    
    if (this.props.formType === 'login') {
      return (
      
      <div>
        <h2>Log In to Welp</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>New to Welp?</h3>
          <Link className="signup" to='/signup'>Sign Up</Link>
          <br />
            <input type="text" 
              value={this.state.email} 
              onChange={this.handleChange('email')} 
              placeholder='Email'
              required/>
          <br />
          <input type="password" 
            value={this.state.password} 
            onChange={this.handleChange('password')}
            placeholder='Password'
            required/>
          <br />
          <button type="submit">Submit</button>
        </form>
        <ul className="errors">
          {errors}
        </ul>
      </div>
    )} else if (this.props.formType === 'signup') {
      return (
        <div>
          <h2>Sign Up for Welp</h2>
          <form onSubmit={this.handleSubmit}>
            <h3>Already on Welp?</h3>
            <Link className="login" to='/login'>Log In</Link>
            <br />
              <input type="text" 
                value={this.state.first_name} 
                onChange={this.handleChange('first_name')} 
                placeholder='First Name'
                required/>
            <br />
              <input type="text" 
                value={this.state.last_name} 
                onChange={this.handleChange('last_name')} 
                placeholder='Last Name'
                required/>
            <br />
              <input type="text" 
                value={this.state.email} 
                onChange={this.handleChange('email')} 
                placeholder='Email'
                required/>
            <br />
            <input type="password" 
              value={this.state.password} 
              onChange={this.handleChange('password')}
              placeholder='Password'
              required/>
            <br />
            <button type="submit">Submit</button>
          </form>
          <ul>
            {errors}
          </ul>
        </div>
      )
    }

    
  }

}