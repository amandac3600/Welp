import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../../app/assets/images/logo.png'

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
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {email: 'demo@user.com', password: 'demouser'};
    this.props.demologin(user);
  }

  render() {
    let errors;
    if (this.props.errors[0].length) {
      errors = this.props.errors.map((error, index)=> 
        (<li key={index}>{error}</li>)
      )
      let error = document.getElementById('errors');
      error.classList.add('errors')
    }
    if (this.handleSubmit) {
      <Redirect to="/"/>
    }
    
    if (this.props.formType === 'Log In') {
      return (
      
      <div className='login-signup-form'>
        <header className='form-header'>
            <Link className="form-header-link" to="/">welp</Link>
            <Link className='logo' to="/"><img src={logo} width='35' height='25'/></Link>
        </header>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="login-signup-title">Log in to Welp</h2>
          <div className='switch-form-both'>
            <h3 className="switch-form-label">New to Welp?</h3>
            <Link className="switch-form-link" to='/signup'>Sign up</Link>
          </div>
          <p className='terms'>By logging in, you agree to Welp’s Terms of Service <br></br> and Privacy Policy.</p>
          <div className="demo-user" >
              <button className="demo-button" onClick={this.demoLogin}>Continue as Demo User</button>
          </div>
          <div className="divider">OR</div>
          <br />
            <input className="input" 
              type="email" 
              value={this.state.email} 
              onChange={this.handleChange('email')} 
              placeholder='Email'
              required/>
          <br />
          <input className="input"
            type="password" 
            value={this.state.password} 
            onChange={this.handleChange('password')}
            placeholder='Password'
            required/>
          <br />
          <button className="submit" type="submit">{this.props.formType}</button>
          <div className="switch-form-both-2">
              <h3 className="switch-form-label-2">New to Welp?
                <Link className="switch-form-link-2" to='/signup'>Sign up</Link>
              </h3>
          </div>
          <div className='errors-container'>
            <ul id="errors">
              {errors}
            </ul>
          </div>
          
        </form>
        
      </div>
    )} else if (this.props.formType === 'Sign Up') {
      return (
        <div className='login-signup-form'>
          <header className='form-header'>
            <Link className="form-header-link" to="/">welp</Link>
            <Link className='logo' to="/"><img src={logo} width='35' height='25'/></Link>
          </header>
          <form className="form" onSubmit={this.handleSubmit}>
            <h2 className="login-signup-title">Sign Up for Welp</h2>
            <h3 className='signup-connect'>Connect with great local businesses</h3>
            <p className='terms'>By continuing, you agree to Welp’s Terms of Service <br></br> and acknowledge Yelp’s Privacy Policy.</p>
            <div className="demo-user" >
              <button className="demo-button" onClick={this.demoLogin}>Continue as Demo User</button>
          </div>
            <div className="divider">OR</div>
            <br />
              <div>
                <input className="name-input-el" type="text" 
                  value={this.state.first_name} 
                  onChange={this.handleChange('first_name')} 
                  placeholder='First Name'
                  required/>
                <input className="name-input-el" type="text" 
                  value={this.state.last_name} 
                  onChange={this.handleChange('last_name')} 
                  placeholder='Last Name'
                  required/>
              </div>
              
            <br />
              <input className="input"
                type="text" 
                value={this.state.email} 
                onChange={this.handleChange('email')} 
                placeholder='Email'
                required/>
            <br />
            <input className="input"
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange('password')}
              placeholder='Password'
              required/>
            <br />
            <button className="submit" type="submit">{this.props.formType}</button>
            <div className="switch-form-both-2">
              <h3 className="switch-form-label-2">Already on Welp?
                <Link className="switch-form-link-2" to='/login'>Log in</Link>
              </h3>
            </div>          
            <div className='errors-container'>
              <ul id="errors">
                {errors}
              </ul>
            </div>
          </form>

          
        </div>
      )
    }

    
  }

}