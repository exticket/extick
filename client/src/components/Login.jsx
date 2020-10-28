import React, { Component } from 'react';
import { loginRequest } from '../apis/authentication-Api';
import { Redirect } from "react-router-dom";
import { SellerContext } from "../SellerContext";
import Button from '@material-ui/core/Button';

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

          <h1>Login In</h1>
          <input placeholder="Email" type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />

          <input placeholder="Password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <Button type="submit">Login</Button>

          {

            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
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

