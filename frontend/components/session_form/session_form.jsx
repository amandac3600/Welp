import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    let link = this.props.formType === 'signup' ? 'login' : 'signup';
    let errors;
    if (this.props.errors[0].length) {
      errors = this.props.errors.map((error, index)=> 
        (<li key={index}>{error}</li>)
      )
    }
    if (this.handleSubmit) {
      <Redirect to="/"/>
    }
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <Link to={`/${link}`}>{link}</Link>
          <br />
          <label > Username <br />
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} /></label><br />
          <label> Password <br />
          <input type="password" value={this.state.password} onChange={this.handleChange('password')}/></label><br />
          <button>Submit</button>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    ) 
  }

}