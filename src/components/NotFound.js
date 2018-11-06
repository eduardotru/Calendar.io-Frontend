import React, { Component } from 'react';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center-align">
        <h1>Page not found</h1>
        <h1>404</h1>
      </div>
    );
  }
}
