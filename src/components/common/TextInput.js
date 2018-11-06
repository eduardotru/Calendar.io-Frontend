import React, { Component } from 'react';

export default class TextInput extends Component {
  render() {
    return (
      <div className="center-align input-field col s6">
        <input
          id={this.props.name}
          type="text"
          className="validate"
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <label className="active" htmlFor={this.props.name} > {this.props.name}</label>
      </div>
    );
  }
}
