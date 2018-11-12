import React, { Component } from 'react';
import swal from 'sweetalert2';

import { attemptLogin } from '../requests';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
  }

  updateValue(e, attr) {
    let state = this.state;
    state[attr] = e.target.value;
    this.setState({
      state: state
    });
  }

  login() {
    if(this.state.username && this.state.password) {
      attemptLogin(this.state.username, this.state.password).then((id) => {
        if(id === -1) {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Wrong credentials!',
          });
        } else {
          this.props.performLogin(id);
        }
      });
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please introduce your credentials!',
      });
    }
  }

  render() {
    return (
      <div className="row">
        <div className="card-panel grey lighten-2 col s12">
          <div className="center-align input-field col s12 m5">
            <input
              id="username"
              type="text"
              className="validate"
              value={this.state.username}
              onChange={(e) => { this.updateValue(e, "username"); }}
            />
            <label className="active" htmlFor="username">Username</label>
          </div>
          <div className="center-align input-field col s12 m5">
            <input
              id="password"
              type="password"
              className="validate"
              value={this.state.password}
              onChange={(e) => { this.updateValue(e, "password"); }}
            />
            <label className="active" htmlFor="password">Password</label>
          </div>
          <div className="valign-wrapper col s12 m2">
            <p>
              <button className="center-align waves-effect waves-light btn" onClick={this.login}>Login</button>
            </p>
          </div>
        </div>
        <div className="col s12">
          Description
        </div>
      </div>
    );
  }
}
