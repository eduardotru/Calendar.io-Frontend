import React, { Component } from 'react';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  render() {
    return (
      <div>
        <p>Calendar</p>
        <div className="fixed-action-btn">
          <button className="btn-floating btn-large red" onClick={() => {this.setState({openModal: !this.state.openModal});}}>
            <i className="large material-icons">add</i>
          </button>
        </div>
      </div>
    );
  }
}
