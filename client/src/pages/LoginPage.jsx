import React, { Component } from 'react';
import logo from '../pics/logicon.png';
import { loginRequest } from '../apis/authentication-Api';
import { Redirect } from "react-router-dom";
import { SellerContext } from "../SellerContext";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      validate: false,
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }


  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    loginRequest(this.state.email, this.state.password)
      .then(result => {
        if (result.data.ok) {
          return this.context.recheck()
            .then(() => {
              this.setState({ validate: true })
            })
        }
        this.setState({ error: result.data.message });
      });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    const redirectState = this.props.location.state;

    if (this.state.validate === true) {
      return <Redirect to={redirectState ? redirectState.prevUrl : "/sellers/mytickets"} />
    }
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>

          <h1>Login Page</h1>
          <img src={logo} alt="logo" width="100px" height="100px" />
          <input placeholder="Email" type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />

          <input placeholder="Password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <button type="submit">Log in</button>
          {

            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
        </form>
      </div>
    );
  }
}

LoginPage.contextType = SellerContext;

export default LoginPage;

