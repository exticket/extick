import React, { Component } from 'react';
import logo from '../pics/logicon.png'; 
import { loginRequest } from '../apis/login-Api';
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
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
    loginRequest(this.state.email,this.state.password).then(result => {
      if(result.data.success){
        return this.setState({ error:true });}
        console.log(result.data.message)
   return this.setState({ error: result.data.message });
    })

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
    if(this.state.error===true){
      return <Redirect to ='/sellers/selltickets' />
    }
      return (
      <div className="Login">
       <form onSubmit={this.handleSubmit}>
        
           <h1>Login Page</h1>
           <img	src={logo} alt="logo" width="100px" height="100px" />
          <input placeholder="Email" type="email" data-test="email" value={this.state.email} onChange={this.handleEmailChange} />

          <input placeholder="Password" type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
      
          <button  type="submit">Log in</button>
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
export default LoginPage;

