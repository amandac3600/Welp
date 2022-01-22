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
    
    if (this.props.formType === 'Log In') {
      return (
      
      <div className='login-signup-form'>
        <form onSubmit={this.handleSubmit}>
          <h2 className="login-signup-title">Log In to Welp</h2>
          <div className='switch-form-both'>
            <h3 className="switch-form-label">New to Welp?</h3>
            <Link className="switch-form-link" to='/signup'>Sign Up</Link>
          </div>
          
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
          <button type="submit">{this.props.formType}</button>
        </form>
        <ul className="errors">
          {errors}
        </ul>
      </div>
    )} else if (this.props.formType === 'Sign Up') {
      return (
        <div className='login-signup-form'>
          <form onSubmit={this.handleSubmit}>
            <h2 className="login-signup-title">Sign Up for Welp</h2>
            <div className="switch-form-both">
              <h3 className="switch-form-label">Already on Welp?</h3>
              <Link className="switch-form-link" to='/login'>Log In</Link>
            </div>
           
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
            <button type="submit">{this.props.formType}</button>
          </form>
          <ul>
            {errors}
          </ul>
        </div>
      )
    }

    
  }

}