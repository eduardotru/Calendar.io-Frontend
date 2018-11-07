import React, { Component } from 'react';

export default class PasswordInput extends Component {
  render() {
    return (
      <div className="center-align input-field col s12">
        <input
          id={this.props.name}
          type="password"
          className="validate"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <label className="active" htmlFor={this.props.name} > {this.props.name}</label>
      </div>
    );
  }
}
